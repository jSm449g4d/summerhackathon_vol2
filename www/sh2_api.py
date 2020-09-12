import flask
from werkzeug.utils import secure_filename
import json

def show(request):
    return_dict = {}
    input_dict = json.loads(request.get_data())
    print(request.get_data())

    if request.method == "POST":
        if 'kensaku' in input_dict:
            return_dict["kekka"] = input_dict["kensaku"].translate(
                str.maketrans("", "", "\"\'<>`;"))  # Not_secure_filename!

        return json.dumps(return_dict, ensure_ascii=False), 200

    return "ok", 200
