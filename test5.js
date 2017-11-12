var http = require('http');
var mysql = require('mysql');
var url = require('url');

var con = mysql.createConnection({
  host: "0.0.0.0",
  user: "root",
  password: "2ind3study5me!",
  database: "mydb"
});


http.createServer(function(request, response, err) {
  if (err) throw err;
  console.log("Connected!");
  var url_parts = url.parse(request.url, true);
var query = url_parts.query; 
  //var sql = "INSERT INTO customers (name, address) VALUES ('Oligarchy Inc', 'Wooded Path 37')";
  //con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
	//console.log(query); 
	response.writeHead(200, {'Content-type': 'text/plain'});
	
	response.end('Sauce people welcome you\n');
  //});
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');