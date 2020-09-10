import flask

# global variable
restartflag: bool = False


def show(request):


    _val1="AAA";_val2="BBB"
    
    # render
    return flask.render_template("main.html",val1=_val1,val2=_val2)
    return "404: nof found → main.html", 404
