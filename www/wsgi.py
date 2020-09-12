# Standard
import os
import sys
import importlib
import flask


# Flask_Startup
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.chdir(os.path.dirname(os.path.join("./", __file__)))
app = flask.Flask(
    __name__, template_folder="./templates/", static_folder='./html/static/')
app.config['MAX_CONTENT_LENGTH'] = 10000000


@app.route("/", methods=["GET", "POST"])
def indexpage_show():
    try:
        return flask.send_file(os.path.join("html", "main.html"))
    except Exception as e:
        return flask.render_template("error.html", STATUS_ERROR_TEXT=str(e)), 500


@app.route("/sh2_api.py", methods=["GET", "POST"])
def api_show():
    try:
        return importlib.import_module("sh2_api").show(flask.request)
    except Exception as e:
        print("")
        return flask.render_template("error.html", STATUS_ERROR_TEXT=str(e)), 500


@app.route('/<path:name>', methods=["GET", "POST"])
def html_show(name):
    try:
        return flask.send_file(os.path.join("html", name).replace("\\", "/").replace("..", "_"))
    except:
        return "cant_access", 404


application = app

if __name__ == "__main__":
    app.run()
