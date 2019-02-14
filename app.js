var express = require('express');
// Create server
var app = express();

var port = process.env.PORT || 3000;
var host = process.env.HOST || '127.0.0.1'

// Stablishing a get method to the server
app.get('/', function (req, res) {
  res.send('<html><head></head><body><h1>Hola Mundo!</h1></body></html>')
});
// Stablishing a get method to the server responding a json
app.get('/api', function (req, res) {
  res.json({
    name: 'Cruz',
    lastName: 'Ortiz',
    age: 26
  })
})
// Stablishing a get method sending a RequestParam (via url)
app.get('/person/:id', function (req, res) {
  res.send('<html><head></head><body><h1>Hola ' + req.params.id + '!</h1></body></html>')
})
// Defines the server configuration
app.listen(port, host);
