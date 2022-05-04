import flask


app = flask.Flask(__name__)

# app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")  # get database_url from env
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = "secret"


@app.route("/")
def main():
    return flask.render_template("home.html")


app.run()
