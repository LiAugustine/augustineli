from multiprocessing import AuthenticationError
import os
import pathlib
import json
import flask
import requests
from flask import session, abort, request
import google.auth.transport.requests
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
from pip._vendor import cachecontrol

from database import db, User, Article
from dotenv import find_dotenv, load_dotenv

from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)

load_dotenv(find_dotenv())
app = flask.Flask(__name__)
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"  # set environment to HTTPS

app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv(
    "DATABASE_URL"
)  # get database_url from env
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = "secret"

bp = flask.Blueprint(
    "bp",
    __name__,
    template_folder="./static/react",
)


GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
AUTHOR_ID = os.getenv("AUTHOR_ID")

db.init_app(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

with app.app_context():
    db.create_all()


@login_manager.unauthorized_handler
def unauthorized():
    """
    This function checks if user logged in before accessing content
    """
    return "You must be logged in to access this content.", 403


@login_manager.user_loader
def load_user(user_name):
    """
    This function gets username and send it as query
    """
    return User.query.get(user_name)


secrets = {
    "web": {
        "client_id": GOOGLE_CLIENT_ID,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth?prompt=select_account",  # make user select an account
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_secret": GOOGLE_CLIENT_SECRET,
        "redirect_uris": [
            "http://127.0.0.1:5000/callback",
        ],
    }
}
__location__ = pathlib.Path(__file__).parent
f = open(os.path.join(__location__, "client_secrets.json"), "w")
f.write(json.dumps(secrets))
f.close()
client_secrets_file = os.path.join(__location__, "client_secrets.json")

flow = Flow.from_client_secrets_file(
    client_secrets_file=client_secrets_file,
    scopes=[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
        "openid",
    ],
    # For local deployment, use this line of code:
    redirect_uri="http://127.0.0.1:5000/callback",
    # For heroku deployment, use this redirect_uri
    # redirect_uri="",
)


@app.route("/login")
def login():
    """
    This function routes to login page
    """
    authorization_url, state = flow.authorization_url()
    session["state"] = state
    return flask.redirect(authorization_url)


@app.route("/callback")
def callback():
    """
    This function handles logins via google account
    """
    flow.fetch_token(authorization_response=request.url)
    if not session["state"] == request.args["state"]:
        abort(500)
    credentials = flow.credentials
    request_session = requests.session()
    cached_session = cachecontrol.CacheControl(request_session)
    token_request = google.auth.transport.requests.Request(session=cached_session)

    id_info = id_token.verify_oauth2_token(
        id_token=credentials._id_token,
        request=token_request,
        audience=GOOGLE_CLIENT_ID,
        clock_skew_in_seconds=10,  # allows system time to be up to 10 seconds off from server time
    )

    name = id_info.get("name")
    google_id = id_info.get("sub")
    session["google_id"] = google_id
    exists = User.query.filter_by(google_id=google_id).first()
    if not exists:
        db.session.add(User(google_id=google_id, name=name))
        db.session.commit()
    user = User.query.filter_by(name=name).first()
    login_user(user)
    return flask.redirect("/")


@app.route("/logout")
@login_required
def logout():
    """
    This function redirects to root page
    """
    logout_user()
    flask.flash("Logged out!")
    return flask.redirect("/")


@app.route("/")
def main():
    return flask.render_template("home.html")


@bp.route("/article_manager")
@login_required
def article_manager():
    return flask.render_template("index.html")


@app.route("/get_author")
def get_author():
    return flask.jsonify(current_user.name)


@app.route("/get_articles")
def get_articles():
    my_articles = Article.query.filter_by(author_id=AUTHOR_ID).all()
    return flask.jsonify(
        [
            {
                "topic": article.topic,
                "image": article.image,
                "title": article.title,
                "subtitle": article.subtitle,
                "author": article.author,
                "date": article.date,
                "article": article.article,
            }
            for article in my_articles
        ]
    )


@app.route("/add_article", methods=["POST"])
def add_title():
    article = flask.request.json
    print(article)
    new_article = Article(
        topic=article.get("topic"),
        image=article.get("image"),
        title=article.get("title"),
        subtitle=article.get("subtitle"),
        author=article.get("author"),
        author_id=AUTHOR_ID,
        date=article.get("date"),
        article=article.get("newArticle"),
    )
    db.session.add(new_article)
    db.session.commit()
    return flask.jsonify(article.get("title"))


@app.route("/computer_articles")
def computer_articles():
    articles = (
        Article.query.filter_by(author_id=AUTHOR_ID).order_by(Article.id.desc()).all()
    )
    return flask.render_template("computers.html", articles=articles)


@app.route("/view_article", methods=["GET"])
def view_article():
    article_id = flask.request.args.get("id")
    article = Article.query.get(article_id)
    return flask.render_template("article.html", article=article)


app.register_blueprint(bp)

app.run()
