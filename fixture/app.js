/*
 * cn-interview - app.js
 * Copyright(c) 2017 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'

const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const ejs = require('ejs')
const urllib = require('urllib')
const url = require('url')
var qs = require('querystring')

const course = require('./api/course')
const ping = require('./api/ping')

const app = express()
// 使用ejs模板
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))

app.use('/api', ping())
app.use('/api', course())

app.get('/', function(req, res, next) {
  urllib.request(req.headers.host + '/api/courses', {dataType: 'json'}, function (err, data, result) {
    if (err) {
      throw err; // you need to handle error
    }
    // console.log(data)
    const option = {};
    res.render('course', {title: 'Course List', course: data, link: option})
  });
})

app.get('/courses', function(req, res, next) {
  urllib.request(req.headers.host + '/api' + req.url, {dataType: 'json'}, function (err, data, result) {
    if (err) {
      throw err; // you need to handle error
    }
    const option = qs.parse(req.url.substring(9))
    res.render('course', {title: 'Course List', course: data, link: option})
  });
})

module.exports = http.createServer(app)
