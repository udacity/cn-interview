/*
 * cn-interview - api.course.test.js
 * Copyright(c) 2017 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'

const t = require('tap')
const qs = require('querystring')
const urllib = require('urllib')
const app = require('../app')

t.beforeEach(done => {
  app.listen(done)
})

t.afterEach(done => {
  app.close(done)
})

t.test('get /course', t => {
  const address = app.address()

  return urllib.request(`http://localhost:${address.port}/api/courses`, {dataType: 'json'})
    .then(result => {
      t.equal(result.status, 200)
      return result.data
    })
    .then(courses => {
      t.ok(courses.length > 0)
      t.end()
    })
})

t.test('get /course', t => {
  const address = app.address()
  const filter = {
    level: '中级',
    track: 'iOS'
  }

  return urllib.request(`http://localhost:${address.port}/api/courses?${qs.stringify(filter)}`, {dataType: 'json'})
    .then(result => {
      t.equal(result.status, 200)
      return result.data
    })
    .then(courses => {
      t.ok(courses.length > 0)
      t.end()
    })
})
