/*
 * cn-interview - app.js
 * Copyright(c) 2017 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'

const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const course = require('./api/course')
const ping = require('./api/ping')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', ping())
app.use('/api', course())

module.exports = http.createServer(app)
