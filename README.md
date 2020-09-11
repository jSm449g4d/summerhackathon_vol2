# summerhackathon_vol2
**現在開発中!!**  
2020/09/09から2020/09/16に開催されたハッカソンの成果物です

## 開発者
辻田,石原,西尾,田中

## URL
#### 管理者: 石原 (CloudRun)
https://sh2-tlnesjcoqq-an.a.run.app

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
┃┣main.py (アプリの機能実装箇所)  
┃┗requirements.txt (必要なライブラリ一覧)  
┣assets (README.mdで使う画像置き場)  
┣.gitignore (git pushでpushしたくないファイル一覧)  
┣cloudbuild.yaml (CaaSへのデプロイ指示書)  
┣LICENSE (MIT: ご自由にお使いください)  
┗README.md この文書  


## ローカルでの使い方
`git clone https://github.com/jSm449g4d/summerhackathon_vol2`  
`cd summerhackathon_vol2/www`  
`pip install -r requirements.txt`  
`python wsgi.py`  
詳細は**Dockerfile**にて  

## 開発の進め方
1. なんか思いついたことや雑談や質問があったら、issueを立てる  
2. 暇なときにissueで雑談する  
3. 解決できそうならプルリク送ったりマージしてどんどん改良していきましょう  

おわーーーーーーVScode万歳!