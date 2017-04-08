/*
 * cn-interview - ping.js
 * Copyright(c) 2017 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'

const {Router} = require('express')

module.exports = () => {
  var router = Router()

  /**
   * Ping API will simple return pong.
   */
  router.get('/ping', (req, res) => {
    res.end('pong')
  })

  return router
}
