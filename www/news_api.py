import flask
from werkzeug.utils import secure_filename
import json
import importlib
from newsapi import NewsApiClient
import datetime

newspy=importlib.import_module("news_api")

def show(request):
    return_dict = {}
    input_dict = json.loads(request.get_data())

    #仮の出力
    data_kari_old = {
        '2018-12-05': [{"description":"aafffva","url":"https://bbbvs"},{"description":"bbb","url":"https://bsssvvsb"}],
        '2018-12-06': [{"description":"afsadfasaa","url":"https://bbsb"},{"description":"bbb","url":"https://bsssdvxsb"}],
        '2018-12-07': [{"description":"axxxaa","url":"https://bbb"},{"description":"bbb","url":"https://bssfdfssb"}],
         }

    if request.method == "POST":
        if 'jponly' in input_dict:
            jponly=input_dict["jponly"].translate(str.maketrans("\"\'\\/<>%`?;", '””￥_〈〉％”？；'))
            if jponly == 'True':
                jponly = True
            else:
                jponly = False
        else:
            jponly = False
        if 'kensaku' in input_dict:
            kensaku=input_dict["kensaku"].translate(str.maketrans("\"\'\\/<>%`?;", '””￥_〈〉％”？；'))
            return_dict = newspy.push_news_data(kensaku,jponly)
        return json.dumps(return_dict, ensure_ascii=False), 200

    return "ok", 200


def push_news_data(keyword,jponly):
    # クライアントを初期化
    newsapi = NewsApiClient(api_key='e79240c2cdf64ef8860194efcbb65ca0')
    #トップニュースを取得
    #headlines = newsapi.get_top_headlines(q='テスト')

    # ニュース元のヒット総件数 
    #yahoo.co.jp 32988
    # prtimes.jp 20401,
    # livedoor.jp 13545
    # getnews.jp 6444,
    # nhk.or.jp 5441
    #natalie.mu 4382
    #asahi.com 4155
    #www.2nn.jp 16691, 2ch系 削除

    # newsweekjapan.jp 2659
    #techcrunch.com 2122 英語系
    #itmedia.co.jp 2586
    #blogos.com 2033
    #jiji.com 1406
    # esuteru.com 1635,
    # tbs.co.jp 1731
    #nikkei.com 1217
    # alfalfalfa.com 1264, コメント系
    
    # mainichi.jp 304
    #hatenadiary.com  587
    # hatenablog.com 351
    # cocolog-nifty.com 329
    # huffingtonpost.jp 444
    # srad.jp 331
    # qetic.jp 382,
    # cookpad.com  495
    # techable.jp 314
    
    #voyagegroup.com 4
    #sankei.com 92
    #moguravr.com 5
    #gekisaka.jp 3
    #jin115.com エラーで無理
    #hateblo.jp 87
    #atmarkit.co.jp 136
    if jponly == True:
        #ニュースのドメインを日本の記事に指定
        news_domain = 'yahoo.co.jp,livedoor.jp,getnews.jp,nhk.or.jp,natalie.mu,asahi.com,prtimes.jp,\
                      newsweekjapan.jp,itmedia.co.jp,jiji.com,esuteru.com,tbs.co.jp,nikkei.com,alfalfalfa.com,blogos.com,\
                      mainichi.jp,hatenablog.com,huffingtonpost.jp,cookpad.com,cocolog-nifty.com,srad.jp,qetic.jp,hatenadiary.com,techable.jp,\
                      sankei.com,moguravr.com,gekisaka.jp,hateblo.jp,voyagegroup.com,atmarkit.co.jp'
        # 過去のニュースを取得 ニュース記事を日本のみに限定
        headlines = newsapi.get_everything(q=keyword,sort_by='relevancy',page_size=100,domains=news_domain)
        #print("headlines",headlines['totalResults'])
    else:
        # ニュースを指定 海外のニュースも含めて検索
        headlines = newsapi.get_everything(q=keyword,sort_by='relevancy',page_size=100)
        #print("headlines2",headlines2['totalResults'])

    sort_time_news_list = []
    news_list = []
    data = {}
    news_data = {}
    if not headlines['articles']:
        # 記事が見つからない場合
        print("記事は見つかりませんでした")
    else:
        # 記事一つ一つ確認していいく
        for news in headlines['articles']:
            # 受け取ったニュースの日時をdatetime型に変更 
            news_unixtime = datetime.datetime.fromisoformat(news['publishedAt'].replace('Z', ''))
            news_unixtime = news_unixtime.timestamp()
            news['publishedAt'] = news_unixtime
            sort_time_news_list.append(news)
        # 日時順に変換する
        sort_time_news_list = sorted(sort_time_news_list, key=lambda x: x['publishedAt'])

        #記事の最初の日時と最後の日時を取得
        first_unixtime = sort_time_news_list[0]['publishedAt']
        last_unixtime = sort_time_news_list[-1]['publishedAt']
        # 振り分けしていくための日時データ
        check_unixtime = first_unixtime
        bind_unixtime = abs(first_unixtime - last_unixtime) / 10
        # 記事一つ一つ確認していいく
        for news in sort_time_news_list:
            # ニュースの日時を取得
            news_unixtime = news['publishedAt']

            news_data['title'] = news['title']
            news_data['description'] = news['description']
            news_data['url'] = news['url']
            news_data['imageUrl'] = news['urlToImage']
            news_list.append(news_data)

            if abs(check_unixtime - news_unixtime) >= bind_unixtime:
                time_string = str(int(news_unixtime)*1000)
                data[time_string] = news_list
                check_unixtime = news_unixtime
                news_list = []

            news_data = {}
        if news_list:
            time_string = str(int(news_unixtime)*1000)
            data[time_string] = news_list
    return data

if __name__ == "__main__":
    test = push_news_data("阿部")
    print(test)