# summerhackathon_vol2  
## Flask通信  
![](https://github.com/jSm449g4d/summerhackathon_vol2/blob/develop/assets/tops.png)
**現在開発中!!**  
2020/09/09から2020/09/16に開催されたハッカソンの成果物です  

## ミッション
情報可視化という手段で、世の中をより簡単に理解できるようにすることで生活を便利にする!  

## どんなアプリ?
「時間を軸とした、キーワードの可視化」をおこなうアプリです!  
キーワード検索で、何時どれだけ記事にされたのか、どんな記事があったのかが分かります!  

## 開発者
辻田,西尾: バックエンド,newsAPIクローラ  
石原,田中: フロントエンド,インフラ  

## URL
#### 管理者: 石原 (Devブランチ⇒CloudRun)
https://sh2-973329585883.asia-northeast1.run.app/

## 全体構成
![](https://github.com/jSm449g4d/summerhackathon_vol2/blob/develop/assets/overview.png)

## 使用技術
### エディタ
- VSCode
### インフラ
GCP(Cloudbuild,CloudRun) + Debian + Waitress/Flask
### フロントエンド
- React(Typescript)
### バックエンド
- Flask(Python)
### その他
- Docker
- Webpack4
- Sass
- bootstrap5
- fontawesome
- newsAPI

## ディレクトリ構成
summerhackathon_vol2/  
┣www/ (アプリ本体)  
┃┣html/ (公開ファイル置き場)  
┃┃┣static/(静的ファイル置き場)  
┃┃┃┣src/(アプリ本体のスクリプト置き場)  
┃┃┃┗img/(アプリで使う画像置き場)  
┃┃┣main.html (アプリ本体ののhtml)  
┃┃┣favicon.ico (ファビコン)  
┃┃┗robots.txt (googleクローラー等への指示)  
┃┣Typescript/ (フロントエンド関係)  
┃┃┗tsx/ (フロントエンドソースコード置き場)  
┃┣templates/ (Flask用テンプレート置き場)  
┃┣Dockerfile (環境構築方法の記述,CaaSへのデプロイ用)  
┃┣wsgi.py (Flask鯖本体/ルーティング等の処理実装箇所)  
┃┣sh2_api.py (API実装箇所)  
┃┗requirements.txt (必要なライブラリ一覧)  
┣assets (README.mdで使う画像置き場)  
┣.gitignore (git pushでpushしたくないファイル一覧)  
┣cloudbuild.yaml (CaaSへのデプロイ指示書)  
┣LICENSE (MIT: ご自由にお使いください)  
┗README.md この文書  


## ローカルでの使い方
`git clone https://github.com/jSm449g4d/summerhackathon_vol2`  
`cd summerhackathon_vol2/www`  
`docker build -t myapp .`  
`docker run --rm -p 8080:8080 myapp`  
詳細は**Dockerfile**にて  

## 開発の進め方
1. なんか思いついたことや雑談や質問があったら、issueを立てる  
2. 暇なときにissueで雑談する  
3. 解決できそうならプルリク送ったりマージしてどんどん改良していきましょう  
