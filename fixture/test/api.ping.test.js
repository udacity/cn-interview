/*
 * cn-interview - api.ping.test.js
 * Copyright(c) 2017 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'

const t = require('tap')
const urllib = require('urllib')
const app = require('../app')

t.beforeEach(done => {
  app.listen(done)
})

t.afterEach(done => {
  app.close(done)
})

t.test('get /ping', t => {
  const address = app.address()

  return urllib.request(`http://localhost:${address.port}/api/ping`, {dataType: 'text'})
    .then(result => {
      t.equal(result.status, 200)
      return result.data
    })
    .then(data => {
      t.equal(data, 'pong')
      t.end()
    })
})
