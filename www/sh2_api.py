import flask
from werkzeug.utils import secure_filename
import json
import importlib

newspy=importlib.import_module("news")

def show(request):
    return_dict = {}
    input_dict = json.loads(request.get_data())

    #仮の出力
    data_kari_old = {
        'result':"検索失敗",
        '2018-12-05': [{"description":"aafffva","url":"https://bbbvs"},{"description":"bbb","url":"https://bsssvvsb"}],
        '2018-12-06': [{"description":"afsadfasaa","url":"https://bbsb"},{"description":"bbb","url":"https://bsssdvxsb"}],
        '2018-12-07': [{"description":"axxxaa","url":"https://bbb"},{"description":"bbb","url":"https://bssfdfssb"}],
         }

    if request.method == "POST":
        if 'kensaku' in input_dict:
            kensaku=input_dict["kensaku"].translate(str.maketrans("\"\'\\/<>%`?;", '””￥_〈〉％”？；'))
            #return_dict = data_kari_old # 仮実装
            return_dict = newspy.push_news_data(kensaku)
        return json.dumps(return_dict, ensure_ascii=False), 200

    return "ok", 200
