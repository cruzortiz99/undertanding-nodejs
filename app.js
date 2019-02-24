var express = require('express');
var bodyparser = require('body-parser')
var path = require('path');
var fs = require('fs')
// Create server
var app = express();

var port = process.env.PORT || 3000;
var host = process.env.HOST || '127.0.0.1';
console.log(`Running server in port: ${port} and address: ${host}`)
// Use a Middleware (express.static) to deliver statis resourses
app.use('/assets', express.static(path.join(__dirname, 'express')));

// Set the view finder engine of express to read .ejs files and to build them according with the engine template and require
//--app.set('view engine', 'ejs')--//

// Custom a Middleware 
app.use('/', function (req, res, next) {
  console.log('Request Url: ' + req.url + ' Request method: ' + req.method);
  // Run the next middleware
  next();
})
// Stablishing a get method to the server
app.get('/', function (req, res) {
  res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hola Mundo!</h1></body></html>');
});
// Stablishing a get method to the server responding a json
app.get('/api', function (req, res) {
  res.json({
    name: 'Cruz',
    lastName: 'Ortiz',
    age: 26,
    QryString: {
      ...req.query
    }
  });
});
// Stablishing a get method sending a RequestParam (via url)
app.get('/person/:id', function (req, res) {
  res.send('<html><head></head><body><h1>Hola ' + req.params.id + '!</h1></body></html>')
});
var urlEncodedParser = bodyparser.urlencoded({ extended: false });
var jsonParser = bodyparser.json();
// Sending the form 
app.get('/person', function (req, res) {
  fs.createReadStream(path.join(__dirname, 'express/index.html')).pipe(res)
});
// Responding to a post. a middleware was needed because express does not handle the body out of the box 
app.post('/person', urlEncodedParser, function (req, res) {
  res.send('Thank you')
  console.log(req.body.firstName)
  console.log(req.body.lastName)
});
// Handling json
app.post('/personjson', jsonParser, function (req, res) {
  res.send('Thank you for the json data')
  console.log(req.body.firstName)
  console.log(req.body.lastName)
})
// Defines the server configuration
app.listen(port, host);