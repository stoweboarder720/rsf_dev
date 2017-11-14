var http = require('http');
var mysql = require('mysql');
var url = require('url');
var express = require('express'); 

var app = express(); 

var con = mysql.createConnection({
  host: "rsf.bucknell.edu",
  user: "rsf_dev",
  password: "uph5Eth3zien",
  database: "rsf_dev"
});

app.get('/get', function (req, res) {
	res.end('welcome\n'); 
}); 

var server = app.listen(3000, function() {
	var host = server.address().address
	var port = server.address().port 
	console.log("test app listening at https://%s:%s", host, port)
}); 
