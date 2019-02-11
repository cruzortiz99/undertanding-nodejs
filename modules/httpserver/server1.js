var http = require('http')

// Http method that gives the capacity to react acording with a particular resquest and response. It builds a actual server using events 
var server = http.createServer(function (req, res) {
  // Building a response for a request event
  // With status 200 and type has a plain text
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  // End method tells what is the last thing in the response, before send it, like the body or nothing 
  res.end("Hello world\n")
  // Listen method tells node wich port to listen and wich IP to use.
}).listen(8080, '127.0.0.1')

module.exports = server