import os
from pathlib import Path
from json import dumps
import requests
from flask import Blueprint, session, abort, redirect, request
from flask_login import login_user
import google.auth.transport.requests
from pip._vendor import cachecontrol
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow

from app_config import GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
from database import db, User


google_login = Blueprint("google_login", __name__)


__location__ = Path(__file__).parent
if not os.path.exists(os.path.join(__location__, "google_secrets.json")):
    secrets = {
        "web": {
            "client_id": GOOGLE_CLIENT_ID,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth?prompt=select_account",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_secret": GOOGLE_CLIENT_SECRET,
            "redirect_uris": [
                "http://127.0.0.1:5000/callback",
            ],
        }
    }
    f = open(os.path.join(__location__, "google_secrets.json"), "w")
    f.write(dumps(secrets))
    f.close()

client_secrets_file = os.path.join(__location__, "google_secrets.json")

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


@google_login.route("/login")
def login():
    """
    This function routes to login page
    """
    authorization_url, state = flow.authorization_url()
    session["state"] = state
    return redirect(authorization_url)


@google_login.route("/callback")
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
    exists = User.query.filter_by(google_id=google_id).first()
    if not exists:
        db.session.add(User(google_id=google_id, name=name))
        db.session.commit()
    user = User.query.filter_by(name=name).first()
    login_user(user)
    return redirect("/")
