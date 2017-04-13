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

// 首页全部课程列表
app.get('/', function(req, res, next) {
  urllib.request(req.headers.host + '/api/courses', {dataType: 'json'}, function (err, data, result) {
    if (err) {
      throw err
    }
    // console.log(data)
    const option = {}
    res.render('course', {title: 'Course List', course: data, link: option})
  });
})

// 左侧导航
app.get('/courses', function(req, res, next) {
  urllib.request(req.headers.host + '/api' + req.url, {dataType: 'json'}, function (err, data, result) {
    if (err) {
      throw err
    }
    const option = qs.parse(req.url.substring(9))
    res.render('course', {title: 'Course List', course: data, link: option})
  });
})

// 搜索功能
app.get('/search', function(req, res, next) {
  var q = req.query.key.toLowerCase()
  urllib.request(req.headers.host + '/api/courses', {dataType: 'json'}, function (err, data, result) {
    if (err) {
      throw err
    }
    var chunk = []
    // 过滤含有搜索关键字的课程，搜索范围包括页面上呈现的title,level,subtitle,summary部分
    for (let i = 0; i < data.length; i++) {
      data[i].title.toLowerCase().indexOf(q) > -1 ? chunk.push(data[i]) :
        (data[i].level.toLowerCase().indexOf(q) > -1 ? chunk.push(data[i]) :
          (data[i].subtitle.toLowerCase().indexOf(q) > -1 ? chunk.push(data[i]) :
            (data[i].summary.toLowerCase().indexOf(q) > -1 ? chunk.push(data[i]) : '')))
    }
    const option = {}
    res.render('course', {title: 'Course List', course: chunk, link: option})
  });
})

module.exports = http.createServer(app)
