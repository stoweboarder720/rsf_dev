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


http.createServer(function(request, response, err) {
  if (err) throw err;
  console.log("Connected!");
  
  if (request.method === "POST") {
  var body = ""; 
  request.on('data', function (chunk) {
	  body += chunk;
  }); 
  
  var jsonObj; 
  request.on('end', function () {
	  console.log('body: ' + body);
	  jsonObj = JSON.parse(body);
	 //console.log(jsonObj.$key);
	 
	 for (i in jsonObj) {
		 console.log(i, ':', jsonObj[i]);
	 }
	 
	 //console.log(body); 
	 //response.write(body); 
	 response.end('Sauce people welcome you\n');
  }); 
  
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query; 
  var sql = "INSERT INTO customers (name, address) VALUES ('moretrash', 'tempgarbage')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
	console.log(query); 
	  response.writeHead(200, {'Content-type': 'text/plain'});
  });
  } else if (request.method === "GET") {
	  response.end('have some bullshit\n'); 
  }

}).listen(3000);

//app.post('/LEDon', function(request, response) {
//	console.log('LED BS FUNCTION CALLED'); 
//}).listen(4000); 

//app.get('/LEDon', function(request, response) {
//	console.log('LED BS FUNCTION CALLED 2'); 
//}).listen(4000); 

console.log('Server running at http://127.0.0.1:8081/');
