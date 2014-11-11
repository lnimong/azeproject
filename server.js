//var http = require('http')
var port = process.env.PORT || 3000;
var host = process.env.HOST || '0.0.0.0';

var app = require('./nodeapp');

app.start(port);
