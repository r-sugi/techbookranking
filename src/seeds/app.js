const express = require('express')
const app = express()

const resHeaders = {
  allowOrigin: {
    title: 'Access-Control-Allow-Origin',
    val: process.env.ALLOW_ORIGIN || 'http://localhost:8080'
  },
  allowHeaders: {
    title: 'Access-Control-Allow-Headers',
    val: 'Origin, X-Requested-With, Content-Type, Accept'
  }
}

app.use((_req, res, next) => {
  res.header(resHeaders.allowOrigin.title, resHeaders.allowOrigin.val)
  res.header(resHeaders.allowHeaders.title, resHeaders.allowHeaders.val)
  next()
})

const orderBy = require('lodash/orderBy')
const { booklists } = require('./src/booklists/index.js')

const hasTag = (book, tagId) => {
  return book.tags.find(tag => tag.uuid === tagId)
}
const booklistsByTagId = (booklists, tagId) => {
  return booklists.filter(book => hasTag(book, tagId))
}
app.get('/booklists/all', (req, res) => {
  res.json(orderBy(booklists, 'pointAll', 'desc'))
})
app.get('/booklists/monthly', (req, res) => {
  res.json(orderBy(booklists, 'pointMonthly', 'desc'))
})
app.get('/booklists/yearly', (req, res) => {
  res.json(orderBy(booklists, 'pointYearly', 'desc'))
})
app.get('/books/:uuid', (req, res) => {
  res.json(booklists.find(book => req.params.uuid === book.uuid))
})
app.get('/booklists/:tag/', (req, res) => {
  res.json(booklistsByTagId(booklists, req.params.tag))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit.')
})
