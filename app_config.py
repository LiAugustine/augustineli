"""
app_config.py initializes and configures the flask app and imports
the environmental variables.
"""
import os
from flask import Flask, Blueprint
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())

DATABASE_URL = os.getenv("DATABASE_URL")
SECRET_KEY = os.getenv("SECRET_KEY")
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
AUTHOR_ID = os.getenv("AUTHOR_ID")

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = SECRET_KEY

os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"  # set environment to HTTPS

# Blueprint for routing to React page
react = Blueprint(
    "react",
    __name__,
    template_folder="./static/react",
)
