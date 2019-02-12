var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
  if (req.url === '/') {
    const highWaterMark = 64 * 1024
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    let html = fs.createReadStream(__dirname + '/index.html', { encoding: 'utf8', highWaterMark: highWaterMark })
    html.on('data', (chunk) => {
      chunk = chunk.replace('{Message}', 'Cruz Ortiz')
      if (chunk.length >= highWaterMark) {
        res.write(chunk)
      } else {
        res.end(chunk)
      }
    })
  } else if (req.url === '/api') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    let obj = {
      name: 'Cruz Miguel',
      lastName: 'Ortiz Castañeda'
    }
    res.end(JSON.stringify(obj))
  } else {
    res.writeHead(404)
    res.end()
  }
}).listen(8080, '127.0.0.1')