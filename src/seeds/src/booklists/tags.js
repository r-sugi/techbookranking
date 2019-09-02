const range = require('lodash/range')
const { getRandomInt } = require('../lib/util.js')
const tags = [
  { name: 'Python', uuid: '7e211300815911e9b1eaf16f3ea67866' },
  { name: '機械学習', uuid: '7e211301815911e9b1eaf16f3ea67866' },
  { name: '深層学習', uuid: '7e211302815911e9b1eaf16f3ea67866' },
  { name: 'MachineLearning', uuid: '7e211303815911e9b1eaf16f3ea67866' },
  { name: '新人プログラマ応援', uuid: '7e211304815911e9b1eaf16f3ea67866' },
  { name: '初心者', uuid: '7e211305815911e9b1eaf16f3ea67866' },
  { name: 'リーダブルコード', uuid: '7e211306815911e9b1eaf16f3ea67866' },
  { name: 'Java', uuid: '7e211307815911e9b1eaf16f3ea67866' },
  { name: 'ポエム', uuid: '7e211308815911e9b1eaf16f3ea67866' },
  { name: 'デザインパターン', uuid: '7e211309815911e9b1eaf16f3ea67866' },
  { name: 'オブジェクト指向', uuid: '7e21130a815911e9b1eaf16f3ea67866' },
  { name: 'uml', uuid: '7e21130b815911e9b1eaf16f3ea67866' },
  { name: 'AWS', uuid: '7e21130c815911e9b1eaf16f3ea67866' },
  { name: '資格', uuid: '7e21130d815911e9b1eaf16f3ea67866' },
  {
    name: 'ソリューションアーキテクト',
    uuid: '7e21130e815911e9b1eaf16f3ea67866'
  },
  {
    name: 'AWS認定ソリューションアーキテクト',
    uuid: '7e21130f815911e9b1eaf16f3ea67866'
  },
  { name: 'AWS認定試験', uuid: '7e211310815911e9b1eaf16f3ea67866' },
  { name: 'Ruby', uuid: '7e211311815911e9b1eaf16f3ea67866' },
  {
    name: 'プロを目指す人のためのRuby入門',
    uuid: '7e211312815911e9b1eaf16f3ea67866'
  },
  { name: 'Rails', uuid: '7e211313815911e9b1eaf16f3ea67866' },
  { name: 'minitest', uuid: '7e211314815911e9b1eaf16f3ea67866' },
  { name: 'vue.js', uuid: '7e211315815911e9b1eaf16f3ea67866' },
  { name: 'JavaScript', uuid: '7e211316815911e9b1eaf16f3ea67866' },
  { name: 'nuxt.js', uuid: '7e211317815911e9b1eaf16f3ea67866' },
  { name: 'PHP', uuid: '7e211318815911e9b1eaf16f3ea67866' },
  { name: 'laravel', uuid: '7e211319815911e9b1eaf16f3ea67866' },
  { name: 'AI', uuid: '7e21131a815911e9b1eaf16f3ea67866' },
  { name: '自然言語処理', uuid: '7e21131b815911e9b1eaf16f3ea67866' },
  { name: 'VR', uuid: '7e21131c815911e9b1eaf16f3ea67866' },
  { name: 'ネットワーク', uuid: '7e21131d815911e9b1eaf16f3ea67866' },
  { name: 'サーバー', uuid: '7e21131e815911e9b1eaf16f3ea67866' },
  { name: 'python3', uuid: '7e21131f815911e9b1eaf16f3ea67866' },
  { name: 'Python3', uuid: '7e211320815911e9b1eaf16f3ea67866' },
  { name: '競技プログラミング', uuid: '7e211321815911e9b1eaf16f3ea67866' },
  { name: 'アルゴリズム', uuid: '7e211322815911e9b1eaf16f3ea67866' },
  { name: 'AtCoder', uuid: '7e211323815911e9b1eaf16f3ea67866' },
  { name: 'algorithm', uuid: '7e213a10815911e9b1eaf16f3ea67866' },
  { name: 'SQL', uuid: '7e213a11815911e9b1eaf16f3ea67866' },
  { name: 'SQLアンチパターン', uuid: '7e213a12815911e9b1eaf16f3ea67866' },
  { name: 'SQLServer', uuid: '7e213a13815911e9b1eaf16f3ea67866' },
  { name: '技術書', uuid: '7e213a14815911e9b1eaf16f3ea67866' },
  { name: '勉強法', uuid: '7e213a15815911e9b1eaf16f3ea67866' },
  { name: 'アジャイル', uuid: '7e213a16815911e9b1eaf16f3ea67866' },
  {
    name: 'エンジニアリング組織論への招待',
    uuid: '7e213a17815911e9b1eaf16f3ea67866'
  },
  { name: 'エンジニア', uuid: '7e213a18815911e9b1eaf16f3ea67866' },
  { name: 'マネジメント', uuid: '7e213a19815911e9b1eaf16f3ea67866' },
  { name: 'Haskell', uuid: '7e213a1a815911e9b1eaf16f3ea67866' },
  { name: '関数型プログラミング', uuid: '7e213a1b815911e9b1eaf16f3ea67866' },
  { name: 'Swift', uuid: '7e213a1c815911e9b1eaf16f3ea67866' },
  { name: 'データ分析', uuid: '7e213a1d815911e9b1eaf16f3ea67866' },
  { name: 'DeepLearning', uuid: '7e213a1e815911e9b1eaf16f3ea67866' }
]

const fetchTags = tagsNum => {
  return range(1, tagsNum).map(index => {
    return Object.assign(tags[index], { point: getRandomInt(1, 400) })
  })
}
module.exports.fetchTags = fetchTags
module.exports.tags = tags
