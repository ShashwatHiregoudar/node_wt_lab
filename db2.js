var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a",
  database: "shopping"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


  var ucrtn = "CREATE TABLE users (name varchar(32) , username varchar(32), address varchar(32), password varchar(32))"
  con.query(ucrtn, function (err, result) {
    if (err) throw err;
    console.log("User created");
  });
});