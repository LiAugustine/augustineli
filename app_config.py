"""
app_config.py initializes and configures the flask app and imports
the environmental variables. Provides modular access for other files.
"""
from os import getenv, environ
from flask import Flask, Blueprint
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())

DATABASE_URL = getenv("DATABASE_URL")
SECRET_KEY = getenv("SECRET_KEY")
GOOGLE_CLIENT_ID = getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = getenv("GOOGLE_CLIENT_SECRET")
AUTHOR_ID = getenv("AUTHOR_ID")

app = Flask(
    __name__,
    static_folder="out/_next",
    template_folder="out",
)
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL
if app.config["SQLALCHEMY_DATABASE_URI"].startswith("postgres://"):
    app.config["SQLALCHEMY_DATABASE_URI"] = app.config[
        "SQLALCHEMY_DATABASE_URI"
    ].replace("postgres://", "postgresql://")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = SECRET_KEY

environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"  # set environment to HTTPS

port = int(getenv("PORT", 8080))
