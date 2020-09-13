from newsapi import NewsApiClient
import datetime


if __name__ == "__main__":
    # クライアントを初期化
    newsapi = NewsApiClient(api_key='e79240c2cdf64ef8860194efcbb65ca0')

    # 人気記事を取得
    #headlines = newsapi.get_top_headlines(sources='techcrunch')
    # 取得したトップニュースの１件を表示
    #print(headlines['articles'][0])

    # sourcesで指定したニュースサイトからトップニュースを取得
    #headlines = newsapi.get_top_headlines(q='テスト')

    #headlines = newsapi.get_top_headlines(q='テスト')
    # 過去のニュースを取得
    headlines = newsapi.get_everything(q='テスト',sort_by='publishedAt',page_size=100)
    #headlines = newsapi.get_everything(q='bitcoin',from_param='2020-09-20',to='2020-09-10',
    #                                      sort_by='relevancy',
    #                                      language='jp',
    #                                      page=2)

    data_kari = {
            '2018-12-01': {"art": ["詳細記事", "詳細記事"]},
            '2018-12-02': {"art": ["gras", "fas"]},
            '2018-12-03': {"art": ["gra", "fas"]}, }
    print(data_kari)

    news_list = []
    news_data = {}
    data = {}
    check_time = datetime.datetime.fromisoformat(headlines['articles'][0]['publishedAt'].replace('Z', ''))
    if not headlines['articles']:
        # 記事が見つからない場合
        print("記事は見つかりませんでした")
    else:
        # 帰ってきたデータのそれぞれのkeyを表示
        #print(headlines['articles'][0].keys())
        # 取得したニュースの全てを表示
        #print(headlines['articles'])
        # 一番最初の記事の日時を取得
        #print(headlines['articles'][0]['publishedAt'])
        # 記事一つ一つ確認していいく
        for news in headlines['articles']:
        
            # 受け取ったニュースの日時を型に変更 
            time = datetime.datetime.fromisoformat(news['publishedAt'].replace('Z', ''))
            if abs(check_time - time).days == 1:
                time_string = time.isoformat()
                news_data["art"] = news_list
                data[time_string] = news_data
                check_time = time
                news_list = []
            else:
                news_list.append(news['title'])
        print(data)