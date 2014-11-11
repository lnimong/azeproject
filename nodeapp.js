var public_ = exports;
var express = require('express');
var fs = require('fs');

public_.start = function (port) {

	var app = express();
	app.use('/', express.static(__dirname + '/app'));
	app.get('/', function(req, res) {
	    res.render(express.static(__dirname + '/app/index.html'));
	});

	app.listen(port, function() {
	  console.log("Listening on port " + port);
	});
};
