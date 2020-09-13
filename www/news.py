from newsapi import NewsApiClient
import datetime

def push_news_data(keyword):
    # クライアントを初期化
    newsapi = NewsApiClient(api_key='e79240c2cdf64ef8860194efcbb65ca0')
    #トップニュースを取得
    #headlines = newsapi.get_top_headlines(q='テスト')
    # 過去のニュースを取得
    headlines = newsapi.get_everything(q=keyword,sort_by='publishedAt',page_size=100)
    # フロント側が欲しいデータの形

    #data_kari = {
    #        '2018-12-01': [{"description":"aaa","url":"bbb"},{"description":"bbb"}],
    #        '2018-12-02': [{"description":"aaa","url":"bbb"},{"description":"bbb"}],}
    #print(data_kari)

    news_list = []
    news_data = {}
    data = {}
    if not headlines['articles']:
        # 記事が見つからない場合
        print("記事は見つかりませんでした")
    else:
        check_time = datetime.datetime.fromisoformat(headlines['articles'][0]['publishedAt'].replace('Z', ''))
        # 帰ってきたデータのそれぞれのkeyを表示
        #print(headlines['articles'][0].keys())
        # 取得したニュースの全てを表示
        #print(headlines['articles'])
        # 一番最初の記事の日時を取得
        #print(headlines['articles'][0]['publishedAt'])
        # 記事一つ一つ確認していいく
        for news in headlines['articles']:
        
            # 受け取ったニュースの日時をdatetime型に変更 
            news_time = datetime.datetime.fromisoformat(news['publishedAt'].replace('Z', ''))
            if abs(check_time - news_time).days == 1:
                time_string = news_time.isoformat()
                data[time_string] = news_list
                check_time = news_time
                news_list = []
            else:
                news_data['title'] = news['title']
                news_data['description'] = news['description']
                news_data['url'] = news['url']
                news_data['imageUrl'] = news['urlToImage']
                news_list.append(news_data)
                news_data = {}

    return data

if __name__ == "__main__":
    test = push_news_data("テスト")
    print(test)