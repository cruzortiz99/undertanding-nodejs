var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  var path = __dirname + '/index.html';
  const highWaterMark = 64 * 1024;
  // Using pipes to improve performance
  // Use pipes whenever you can to build fastest app
  // Build Customs streams to implement templates
  let html = fs.createReadStream(path, { encoding: 'utf8', highWaterMark: highWaterMark })
  html.on('data', (chunk) => {
    chunk = chunk.replace('{Message}', 'Cruz Ortiz')
    if (chunk.length >= highWaterMark) {
      res.write(chunk)
    } else {
      res.end(chunk)
    }
  })
}).listen(8080, '127.0.0.1');

module.exports = server