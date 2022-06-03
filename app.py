import flask
from app_config import app, AUTHOR_ID, react
from google_login import google_login
from database import db, User, Article

from flask_login import (
    LoginManager,
    current_user,
    login_required,
    logout_user,
)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"


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
        Article.query.filter_by(author_id=AUTHOR_ID)
        .filter_by(topic="Computers")
        .order_by(Article.id.desc())
        .all()
    )
    return flask.render_template("blog.html", topic="Computer", articles=articles)


@app.route("/cybersecurity_articles")
def cybersecurity_articles():
    articles = (
        Article.query.filter_by(author_id=AUTHOR_ID)
        .filter_by(topic="Cybersecurity")
        .order_by(Article.id.desc())
        .all()
    )
    return flask.render_template("blog.html", topic="Cybersecurity", articles=articles)


@app.route("/politics_articles")
def politics_articles():
    articles = (
        Article.query.filter_by(author_id=AUTHOR_ID)
        .filter_by(topic="Politics")
        .order_by(Article.id.desc())
        .all()
    )
    return flask.render_template("blog.html", topic="Politics", articles=articles)


@app.route("/view_article", methods=["GET"])
def view_article():
    article_id = flask.request.args.get("id")
    article = Article.query.get(article_id)
    return flask.render_template("article.html", article=article)


@react.route("/article_manager")
@login_required
def article_manager():
    return flask.render_template("index.html")


app.register_blueprint(react)
app.register_blueprint(google_login)

app.run()
