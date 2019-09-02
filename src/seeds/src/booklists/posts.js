const range = require('lodash/range')
const orderBy = require('lodash/orderBy')
const posts = [
  {
    title: 'ディープラーニングに入門するためのリソース集と学習法（2018年版）',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1205
  },
  {
    title:
      '【スマホOK/実行しながら学ぶ】東大松尾研のデータサイエンティスト育成/ Deep Learning基礎講座を自習する',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1197
  },
  {
    title:
      '例の機械学習コースが良いらしいと知りながらも2年間スルーし続けたがやはり良かったという話',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1133
  },
  {
    title: '手書きひらがなの認識で99.78%の精度をディープラーニングで',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 707
  },
  {
    title: 'データサイエンス、データ分析、機械学習関連の本',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 628
  },
  {
    title:
      '新人プログラマに正月休み中を使って読んでみてほしい技術書をセレクトしてみた。',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 2552
  },
  {
    title: 'プログラミング勉強を加速させる7つの習慣',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 2466
  },
  {
    title: '新米エンジニアが入社して半年で読んだ・読まされた本まとめ',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1839
  },
  {
    title: 'Naming -名前付け-',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1784
  },
  {
    title: 'Java初心者時代にコードレビューで指摘された悪しき習慣',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 980
  },
  {
    title:
      '私からあなたへ 一人前のJavaエンジニアになるためのロードマップを送ろう',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 828
  },
  {
    title: 'わたしからみたオブジェクト指向プログラミング',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 289
  },
  {
    title: 'DDD関連書籍メモ',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 116
  },
  {
    title: '新人におすすめしたい3冊',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 63
  },
  {
    title: 'AWS認定9冠制覇したのでオススメの勉強法などをまとめてみる',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1094
  },
  {
    title:
      '【合格しました！】AWS 認定ソリューションアーキテクト アソシエイト 受験記',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 247
  },
  {
    title:
      'AWS ソリューションアーキテクトアソシエイト 受けてきました＆勉強法(2016/10版)',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 218
  },
  {
    title:
      'AWS認定ソリューションアーキテクト – アソシエイト(2018年2月リリース)試験の傾向と対策',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 131
  },
  {
    title: '1年目iOSエンジニアがAWS SAAを取得した勉強法',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 60
  },
  {
    title: 'OSSコントリビュートに挑戦してみた話',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 451
  },
  {
    title:
      'プログラミング未経験者がエンジニアとして配属されるまでに使った書籍と学習コンテンツ',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 445
  },
  {
    title: 'サンプルコードでわかる！Ruby 2.6の主な新機能と変更点',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 297
  },
  {
    title:
      'これからRubyで仕事したい人のためのリポジトリ「Code Your Ruby」を作りました',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 105
  },
  {
    title: 'Ruby on Railsのインストールと設定',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 73
  },
  {
    title: '1週間でVue.jsをマスターしようと思った時に参考にしたサイト',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 631
  },
  {
    title: 'JS初心者がVue.jsでSPAを作ろうと思ってやったこと',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 157
  },
  {
    title:
      '《Nuxt.js》アトミックデザインの静的サイトを構築するために必要な小粒なTipsまとめ。',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 67
  },
  {
    title: 'NuxtでRailsに勝つ方法',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 34
  },
  {
    title: '今から始めても遅くない、Vue.jsをより効果的に学ぶための記事まとめ',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 13
  },
  {
    title:
      '【スマホOK/実行しながら学ぶ】東大松尾研のデータサイエンティスト育成/ Deep Learning基礎講座を自習する',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1197
  },
  {
    title:
      '【保存版・初心者向け】独学でAIエンジニアになりたい人向けのオススメのAI勉強方法 (2019年改定版)',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 612
  },
  {
    title: 'JDLA Deep Learning for ENGINEER 2018 受けてみた',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 24
  },
  {
    title: 'ゼロから作るRNNによる文章分類モデル',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 16
  },
  {
    title:
      '初心者から data scientist・AI engineer になるための勉強法&おすすめサイト・本を一つの記事にまとめたかった',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 16
  },
  {
    title: '【VR学まとめ】2.7 モダリティ間相互作用と認知特性',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 4
  },
  {
    title: '『バーチャルリアリティ学』１〜４章まとめ',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 4
  },
  {
    title: '【VR学まとめ】2.2 視覚',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 3
  },
  {
    title: '【VR学まとめ】4.2.3 聴覚レンダリングとモデル',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 2
  },
  {
    title: '【VR学まとめ】1.2 VRの要素と構成',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1
  },
  {
    title:
      'AWS認定ソリューションアーキテクト – アソシエイト(2018年2月リリース)試験の傾向と対策',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 131
  },
  {
    title: 'AWS(クラウド)超入門 第1回',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 75
  },
  {
    title: '1年目iOSエンジニアがAWS SAAを取得した勉強法',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 60
  },
  {
    title:
      '実務経験がなくても2ヶ月でAWSソリューションアーキテクトに合格するためにやったこと',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 28
  },
  {
    title: 'TerraformとAWSに同時入門する',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 26
  },
  {
    title: '独断と偏見で選ぶ、新人Rubyプログラマの為の技術書21選',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 330
  },
  {
    title: 'DB未経験の新米エンジニアが読んだ書籍を時系列順に紹介',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 72
  },
  {
    title: 'PostgreSQL JSON の応用メモ',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 58
  },
  {
    title: 'Symfonyの学びかた (2014/04/19 講演資料)',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 28
  },
  {
    title: '昔の自分に伝えたい事',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 27
  },
  {
    title:
      'AtCoder に登録したら次にやること ～ これだけ解けば十分闘える！過去問精選 10 問 ～',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1856
  },
  {
    title: 'アルゴリズムとは何か！？ ～ 文系理系問わず楽しめる精選 6 問 ～',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1247
  },
  {
    title: '計算量オーダーの求め方を総整理！ 〜 どこから log が出て来るか 〜',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 851
  },
  {
    title: 'AtCoder 版！蟻本 (初級編)',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 546
  },
  {
    title:
      'ビット演算 (bit 演算) の使い方を総特集！ 〜 マスクビットから bit DP まで 〜',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 452
  },
  {
    title: 'Python 割と使うライブラリ集',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 329
  },
  {
    title:
      '【71個掲載】Pythonを学ぶなら見るべき参考本/サイト/情報の、学べる分野や金額など徹底網羅',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 316
  },
  {
    title:
      'Windows10環境にAnaconda+Visual Studio CodeでPython環境を構築【2017年9月】',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 35
  },
  {
    title:
      '初心者から data scientist・AI engineer になるための勉強法&おすすめサイト・本を一つの記事にまとめたかった',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 16
  },
  {
    title:
      '「プログラミング始めたい」とビジネス職に言われたときに勧めるべき言語とユースケース',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 15
  },
  {
    title: '何かのときにすっと出したい、プログラミングに関する法則・原則一覧',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 3755
  },
  {
    title: '不安とストレスから解放される見積りとスケジュール方法',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 2701
  },
  {
    title:
      '新人プログラマに知ってもらいたいメソッドを読みやすく維持するいくつかの原則',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 2553
  },
  {
    title:
      '新入社員が来てメンターになれって言われたけど、どうすればいいのかという対話テクニック',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1913
  },
  {
    title:
      'プログラミング未経験者がエンジニアとして配属されるまでに使った書籍と学習コンテンツ',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 445
  },
  {
    title: '独断と偏見で選ぶ、新人Rubyプログラマの為の技術書21選',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 330
  },
  {
    title: '効率良く脳に記憶させる方法を模索する ',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 60
  },
  {
    title: 'オススメの技術書についてまとめたよ',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 18
  },
  {
    title: '関数型言語のウソとホント',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1364
  },
  {
    title: 'なぜHaskellを学ぶと良いか',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 279
  },
  {
    title: 'ニューラルネットワークと深層学習(和訳)',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 277
  },
  {
    title:
      'Proposalには載っていないSwift 5のasync/awaitが素晴らしいと思う理論的背景',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 161
  },
  {
    title: 'これから Haskell を学ぶ人のための書籍紹介',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 62
  },
  {
    title: 'ディープラーニングに入門するためのリソース集と学習法（2018年版）',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1205
  },
  {
    title: '機械学習や統計に関する情報収集',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 642
  },
  {
    title: 'データサイエンス、データ分析、機械学習関連の本',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 628
  },
  {
    title:
      '【保存版・初心者向け】独学でAIエンジニアになりたい人向けのオススメのAI勉強方法 (2019年改定版)',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 612
  },
  {
    title:
      '【随時更新】マシンラーニングエンジニアが機械学習、統計学のおすすめ本を紹介する',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 98
  },
  {
    title:
      'Kaggle]0から本当に機械学習を理解するために学ぶべきこと～一流のデータサイエンティストを例に～',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 742
  },
  {
    title:
      '【保存版・初心者向け】独学でAIエンジニアになりたい人向けのオススメのAI勉強方法 (2019年改定版)',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 612
  },
  {
    title:
      'ブックマークしてあった、データサイエンスなどの記事約1年分のリンク集（2018年5月ごろまで）',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 32
  },
  {
    title: 'Google Colabratory 上でTensorBoardを使う方法',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 26
  },
  {
    title:
      'dockerで機械学習(6) with anaconda(6)「 scikit-learnとTensorFlowによる実践機械学習」Aurélien Géron　著',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 15
  },
  {
    title:
      'AtCoder に登録したら次にやること ～ これだけ解けば十分闘える！過去問精選 10 問 ～',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1856
  },
  {
    title: 'ソートを極める！ 〜 なぜソートを学ぶのか 〜',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1408
  },
  {
    title: 'アルゴリズムとは何か！？ ～ 文系理系問わず楽しめる精選 6 問 ～',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 1247
  },
  {
    title: '低レイヤーを学ぶための技術書をまとめてみる',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 385
  },
  {
    title: '競技プログラミングについて紹介(初心者向け)',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 34
  },
  {
    title: '機械学習/ディープラーニング初心者が2018年にやったこと、読んだ論文',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 848
  },
  {
    title: '小さなデータセットで良い分類器を学習させるとき',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 130
  },
  {
    title: 'Keras で Amazon SageMaker を使用する（Legacy Mode）',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 13
  },
  {
    title: '板情報分析入門~ビットコインの板情報を入手し解析してみた~',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 13
  },
  {
    title:
      'tensorflow+Geforce RTXシリーズでパフォーマンスを確認してみる（その２）',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 8
  },
  {
    title: '一から始める機械学習（Kaggleで学ぶ機械学習）',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 146
  },
  {
    title:
      'データサイエンティスト・データエンジニアのための Python ライブラリ一覧',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 82
  },
  {
    title:
      'scikit-learn を用いた交差検証（Cross-validation）とハイパーパラメータのチューニング（grid search）',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 62
  },
  {
    title: '「OpenCV-Python Tutorials」と「実践　機械学習システム」',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 48
  },
  {
    title:
      'Flaskでツイートからおススメの「いらすとや」の画像を表示するアプリつくった',
    link: 'https://qiita.com/tomo_makes/items/5d6f5860bb793e3b354a',
    like: 39
  }
]
const fetchPosts = bookPostsNum => {
  const origin = getRandomInt()
  return orderBy(
    range(origin, origin + bookPostsNum).map(i => posts[i]),
    'like',
    'desc'
  )
}

const getRandomInt = (min = 0, max = 40) => {
  const MIN = Math.ceil(min)
  const MAX = Math.floor(max)
  return Math.floor(Math.random() * (MAX - MIN)) + MIN
}

module.exports.fetchPosts = fetchPosts
