var http = require('http');
var mysql = require('mysql');
var url = require('url');
var express = require('express'); 

var app = express(); 

//require the body-parser nodejs module
bodyParser = require('body-parser'),
//require the path nodejs module
path = require("path");

var con = mysql.createConnection({
  host: "rsf.bucknell.edu",
  user: "rsf_dev",
  password: "uph5Eth3zien",
  database: "rsf_dev"
});

//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//tell express that www is the root of our public web folder
app.use(express.static(path.join(__dirname, 'www')));

//tell express what to do when the /about route is requested
app.post('/form', function(req, res){
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query; 
  var sql = "INSERT INTO rsftest (satisfaction, appIssue, pathIssue, likes, improve) VALUES ('"+req.body.satisfaction+"', '"+req.body.appIssue+"', '"+req.body.pathIssue+"', '"+req.body.likes+"', '"+req.body.improve+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Feedback Inserted");
	console.log(query); 
  });
	
  res.setHeader('Content-Type', 'application/json');

  //mimic a slow network connection
  setTimeout(function(){

    res.send("Feedback Submitted!"); 

  }, 1000)
	
});

app.get('/get', function (req, res) {
	res.end('welcome\n'); 
}); 

var server = app.listen(3000, function() {
	var host = server.address().address
	var port = server.address().port 
	console.log("test app listening at https://%s:%s", host, port)
}); 
