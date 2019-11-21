const fs = require('fs')
const path = require('path')
const express = require('express')
const proxy = require('http-proxy-middleware')
var app = express()
var port = 8001

const apiProxy = proxy('/api', { target: 'http://i.ways.cn', changeOrigin: true })
app.use('/api/*', apiProxy)

app.use(express.static(path.resolve(__dirname, './dist')))
app.get('*', function(req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
  res.send(html)
})

app.listen(port, () => {
  console.log('Listening on: http://127.0.0.1:' + port)
})
