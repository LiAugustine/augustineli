"""
database.py is responsible for the database containing users
and articles.
"""
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from app_config import app
from flask_login import UserMixin

db = SQLAlchemy(app)


class User(db.Model, UserMixin):
    __tablename__ = "Users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False, nullable=False)
    picture = db.Column(db.Text, unique=False, nullable=True)
    account_id = db.Column(db.String(100), unique=True, nullable=False)
    google_id = db.Column(db.String(100), unique=True, nullable=True)

    def already_liked(self, article):
        return (
            Like.query.filter(
                Like.rater_id == self.account_id, Like.article_id == article.id
            ).count()
            > 0
        )


class Article(db.Model, UserMixin):
    __tablename__ = "Articles"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=False, nullable=False)
    subtitle = db.Column(db.String(500), unique=False, nullable=False)
    topic = db.Column(db.String(50), unique=False, nullable=False)
    image = db.Column(db.Text, unique=False, nullable=True)
    author = db.Column(db.String(100), unique=False, nullable=False)
    author_id = db.Column(db.String(100), ForeignKey("Users.account_id"))
    date = db.Column(db.String(100), unique=False, nullable=False)
    article = db.Column(db.Text, unique=False, nullable=False)
    likes = db.relationship(
        "Like", backref=db.backref("article", order_by="Like.article_id")
    )


class Like(db.Model, UserMixin):
    __tablename__ = "Likes"
    id = db.Column(db.Integer, primary_key=True)
    rater_id = db.Column(db.String(100), ForeignKey("Users.account_id"))
    article_id = db.Column(db.Integer, ForeignKey("Articles.id"))


def num_of_likes():
    rows = db.session.query(Like).count()
    return rows


def like_article(rater_id, article_id):
    db.session.add(rater_id, article_id)
    db.session.commit()


def unlike_article(rater_id, article_id):
    db.session.add(rater_id, article_id)
    db.session.commit()


db.create_all()
