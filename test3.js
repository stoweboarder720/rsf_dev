var mysql = require('mysql');

var con = mysql.createConnection({
  host: "rsf.bucknell.edu",
  user: "rsf_dev",
  password: "uph5Eth3zien",
  database: "rsf_dev"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE rsftest (satisfaction INT, appIssue VARCHAR(512), pathIssue VARCHAR(512), likes VARCHAR(256), improve VARCHAR(256))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});