from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from flask_login import UserMixin

db = SQLAlchemy()


class User(db.Model, UserMixin):
    __tablename__ = "Users"
    id = db.Column(db.Integer, primary_key=True)
    google_id = db.Column(db.Float, unique=True, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)


class Article(db.Model, UserMixin):
    __tablename__ = "Articles"
    id = db.Column(db.Integer, primary_key=True)
    topic = db.Column(db.String(50), unique=False, nullable=False)
    image = db.Column(db.Text, unique=False, nullable=True)
    title = db.Column(db.String(100), unique=False, nullable=False)
    subtitle = db.Column(db.String(500), unique=False, nullable=False)
    author = db.Column(db.String(100), unique=False, nullable=False)
    author_id = db.Column(db.Float, ForeignKey("Users.google_id"))
    date = db.Column(db.String(100), unique=False, nullable=False)
    article = db.Column(db.Text, unique=False, nullable=False)
