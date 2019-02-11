var fs = require('fs');
var http = require('http')

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  var path = __dirname + '/index.html'
  var html = fs.readFileSync(path, {
    encoding: 'utf8'
  })
  var message = 'Cruz Ortiz'
  html = html.replace('{Message}', message)
  res.end(html)
}).listen(8080, '127.0.0.1')

module.exports = server