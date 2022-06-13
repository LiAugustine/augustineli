"""
app.py is the main file which is run. Contains the routes responsible
for allowing user to navigate through the website. 
"""

from flask import flash, jsonify, redirect, request, render_template
from flask_talisman import Talisman
from app_config import app, AUTHOR_ID, react, port
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
    Message is displayed when a page requires logging in
    to access.
    """
    return "You must be logged in to access this content.", 403


@login_manager.user_loader
def load_user(user_name):
    """
    Loads the user via flask-login.
    """
    return User.query.get(user_name)


@app.route("/logout")
@login_required
def logout():
    """
    Logs the user out through flask-login
    and returns to the home page.
    """
    logout_user()
    flash("Logged out!")
    return redirect("/")


@app.route("/")
def main():
    return render_template("home.html", AUTHOR_ID=AUTHOR_ID)


@app.route("/get_author")
def get_author():
    return jsonify(current_user.name)


@app.route("/get_articles")
def get_articles():
    my_articles = Article.query.filter_by(author_id=AUTHOR_ID).all()
    return jsonify(
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
    article = request.json
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
    return jsonify(article.get("title"))


@app.route("/computer_articles")
def computer_articles():
    articles = (
        Article.query.filter_by(author_id=AUTHOR_ID)
        .filter_by(topic="Computers")
        .order_by(Article.id.desc())
        .all()
    )
    return render_template("blog.html", topic="Computer", articles=articles)


@app.route("/cybersecurity_articles")
def cybersecurity_articles():
    articles = (
        Article.query.filter_by(author_id=AUTHOR_ID)
        .filter_by(topic="Cybersecurity")
        .order_by(Article.id.desc())
        .all()
    )
    return render_template("blog.html", topic="Cybersecurity", articles=articles)


@app.route("/politics_articles")
def politics_articles():
    articles = (
        Article.query.filter_by(author_id=AUTHOR_ID)
        .filter_by(topic="Politics")
        .order_by(Article.id.desc())
        .all()
    )
    return render_template("blog.html", topic="Politics", articles=articles)


@app.route("/view_article", methods=["GET"])
def view_article():
    article_id = request.args.get("id")
    article = Article.query.get(article_id)
    return render_template("article.html", article=article)


@react.route("/article_manager")
@login_required
def article_manager():
    """
    Routes to react page for creating articles.
    Only the creator's account can access.
    """
    return render_template("index.html")


app.register_blueprint(react)
app.register_blueprint(google_login)

# Local deployment:
# if __name__ == "__main__":
#    app.run()

# Heroku deployment:
Talisman(app, content_security_policy=None)
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=port)
