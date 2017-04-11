/*
 * cn-interview - index.js
 * Copyright(c) 2017 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'

const {Router} = require('express')
const courses = require('../data/courses.json')

module.exports = () => {
  var router = Router()

  /**
   * Load all courses.
   * filter support like,
   *   /courses?level=中级&track=iOS
   */
  router.get('/courses', (req, res, next) => {
    const {level, track} = req.query
    res.json(courses.filter(c => level ? level === c.level : true)
      .filter(c => track ? !!~c.tracks.indexOf(track) : true))
  })

  return router
}
