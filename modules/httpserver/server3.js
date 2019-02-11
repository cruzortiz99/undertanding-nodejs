var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  var path = __dirname + '/index.html';
  // Using pipes to improve performance
  // Use pipes whenever you can to build fastest app
  // Build Customs streams to implement templates
  fs.createReadStream(path).pipe(res);
}).listen(8080, '127.0.0.1');

module.exports = server