from newsapi import NewsApiClient

print("test")

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
headlines = newsapi.get_everything(q='テスト',sort_by='relevancy',page_size=100)
#headlines = newsapi.get_everything(q='bitcoin',from_param='2020-09-20',to='2020-09-10',
#                                      sort_by='relevancy',
#                                      language='jp',
#                                      page=2)



if not headlines['articles']:
    # 記事が見つからない場合
    print("記事は見つかりませんでした")
else:
    # 帰ってきたデータのそれぞれのkeyを表示
    print(headlines['articles'][0].keys())
    # 取得したニュースの全てを表示
    print(headlines['articles'][0])

    
