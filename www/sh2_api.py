import flask
from werkzeug.utils import secure_filename
import json


def show(request):
    return_dict = {}
    input_dict = json.loads(request.get_data())

    #仮の出力
    data_kari = {
        '2018-12-01': {"art": ["gras", "fas"]},
        '2018-12-02': {"art": ["gras", "fas"]},
        '2018-12-03': {"art": ["gra", "fas"]},
        '2018-12-04': {"art": ["gra", "fass"]},
        '2018-12-05': {"art": ["grva", "fas"]},
        '2018-12-06': {"art": ["gra", "fas"]},
        '2018-12-07': {"art": ["gra", "fas", "ffs"]},
        '2018-12-08': {"art": ["gra", "fasf"]},
        '2018-12-09': {"art": ["gra", "fas"]},
        '2018-12-10': {"art": ["gra", "fas"]},
        '2018-12-11': {"art": ["grsa", "fas"]},
        '2018-12-12': {"art": ["gra", "fas"]},
        '2018-12-13': {"art": ["gra", "fas"]},
        '2018-12-14': {"art": ["grfa", "fas"]},
        '2018-12-15': {"art": ["gra", "GE", "fas"]},
        '2018-12-16': {"art": ["gra", "fas"]},
        '2018-12-17': {"art": ["gra", "fas"]},
        '2018-12-18': {"art": ["gra", "fas"]},
        '2018-12-19': {"art": ["gra", "fas"]},
        '2018-12-20': {"art": ["grva", "fas"]},
        '2018-12-21': {"art": ["gra", "fas"]},
        '2018-12-22': {"art": ["gra", "fas"]},
        '2018-12-23': {"art": ["gra", "fas"]}, }

    if request.method == "POST":
        if 'kensaku' in input_dict:
            # 入力データ
            input_dict["kensaku"].translate(str.maketrans("\"\'\\/<>%`?;", '””￥_〈〉％”？；'))

            #出力データ
            return_dict = data_kari
        return json.dumps(return_dict, ensure_ascii=False), 200

    return "ok", 200
