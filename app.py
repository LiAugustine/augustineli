"""
app.py is the main file which is run. Contains the routes responsible
for allowing user to navigate through the website. 
"""

from flask import jsonify, redirect, request, render_template
from flask_talisman import Talisman
from app_config import app, AUTHOR_ID, port
from google_login import google_login
from database import db, User, Article, Like

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
    return redirect("/")


# React routes for react backend and routing to the react page below


@app.route("/get_user")
def get_user():
    if current_user.is_authenticated:
        return jsonify(
            {
                "name": current_user.name,
                "picture": current_user.picture,
            }
        )
    return jsonify(False)


@app.route("/get_author")
def get_author():
    return jsonify("Augustine Li")


@app.route("/get_articles")
def get_articles():
    my_articles = Article.query.filter_by(author_id=AUTHOR_ID).all()
    return jsonify(
        [
            {
                "id": article.id,
                "title": article.title,
                "subtitle": article.subtitle,
                "topic": article.topic,
                "image": article.image,
                "author": article.author,
                "date": article.date,
                "article": article.article,
                "likes": db.session.query(Like)
                .filter(Like.article_id == Article.id)
                .count(),
            }
            for article in my_articles
        ]
    )


@app.route("/add_article", methods=["POST"])
def add_title():
    article = request.json
    new_article = Article(
        title=article.get("title"),
        subtitle=article.get("subtitle"),
        topic=article.get("topic"),
        image=article.get("image"),
        author=article.get("author"),
        author_id=AUTHOR_ID,
        date=article.get("date"),
        article=article.get("newArticle"),
    )
    db.session.add(new_article)
    db.session.commit()
    return jsonify(article.get("title"))


@app.route("/save_articles", methods=["POST"])
def save_articles():
    data = request.json
    old_articles = Article.query.filter_by(author_id=current_user.account_id).all()
    new_articles = [
        Article(
            title=article["title"],
            subtitle=article["subtitle"],
            topic=article["topic"],
            image=article["image"],
            author=article["author"],
            author_id=AUTHOR_ID,
            date=article["date"],
            article=article["article"],
        )
        for article in data
    ]
    for article in old_articles:
        db.session.delete(article)
    for article in new_articles:
        db.session.add(article)
    db.session.commit()
    return jsonify("Article changes saved")


@app.route("/")
# @login_required
def index():
    """
    Routes to react page for creating articles.
    Only the creator's account can access.
    """
    return render_template("index.html")


@app.route("/Blog")
# @login_required
def blog():
    """
    Blog
    """
    return render_template("Blog.html")


@app.route("/<id>")
# @login_required
def post(id):
    """
    Post
    """
    return render_template("[id].html")


@app.route("/AddArticle")
@login_required
def add_article_react():
    """
    Route to properly register AddArticle.js
    """
    return render_template("AddArticle.html")


@app.route("/EditArticles")
@login_required
def edit_article_react():
    """
    Route to properly register EditArticles.js
    """
    return render_template("EditArticles.html")


# app.register_blueprint(react)
app.register_blueprint(google_login)

# Local deployment:
# if __name__ == "__main__":
#     app.run()

# Heroku deployment:
Talisman(app, content_security_policy=None)
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=port)
