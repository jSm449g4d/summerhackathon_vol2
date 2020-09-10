import flask
from werkzeug.utils import secure_filename

# global variable
restartflag: bool = False


def show(request):
    _val1="試しに入力してください";
    if 'submit' in request.form and secure_filename(request.form['submit'])=="True":
        if 'val1' in request.form:
            _val1=request.form["val1"].translate(str.maketrans("","","\"\'<>`;"))#Not_secure_filename!
    
    # render
    return flask.render_template("main.html",val1=_val1)
    return "404: nof found → main.html", 404
