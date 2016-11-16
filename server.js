// Library imports
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var notifier = require('node-notifier');
var expressWs = require('express-ws')(app);

// Custom module imports
var blogRoutes = require('./blogRoutes.js');

var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', function(req, res) {
  res.redirect('index.html');
});

app.use('/api/', blogRoutes.routes());

app.listen(8080);
console.log('Server running on port 8080...');
