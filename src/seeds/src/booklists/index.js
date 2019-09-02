const orderBy = require('lodash/orderBy')
const cloneDeep = require('lodash/cloneDeep')
const { getRandomInt, uuid } = require('../lib/util.js')
const { images } = require('./images.js')
const { titles } = require('./titles.js')
const { ASINs } = require('./ASINs.js')
const { fetchTags } = require('./tags.js')
const { fetchPosts } = require('./posts.js')
const { description } = require('./description.js')
const db = {
  booklists: []
}
// FIXME: 重複定義している: node-babelでimport exportでmoduleからimportしたい
const sumArray = arr => {
  return arr.reduce(function(prev, current, i, arr) {
    return prev + current
  })
}

for (let i = 1; i < 18; i++) {
  const tags = cloneDeep(orderBy(fetchTags(20), 'point', 'desc'))
  db.booklists.push({
    id: i,
    uuid: uuid(),
    image_path: images[i],
    book_title: titles[i],
    ASIN: ASINs[i],
    tags: tags,
    posts: fetchPosts(50),
    pointAll: sumArray(tags.map(tag => tag.point)),
    pointYearly: getRandomInt(100, 1000),
    pointMonthly: getRandomInt(1, 100),
    author_name: '斎藤 康毅',
    publish_date: '2016-09-24',
    description: description
  })
}

module.exports.booklists = db.booklists
