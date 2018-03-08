var http = require("http");
var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
//---------------------------------------------//
   var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a",
  database: "kle"
});

//-------------------------------------------//
app.get('/send', function (req, res) {
var rr="<html>";
rr = rr+"<body>";
rr=rr+"<form  method='post' action='thank' >";
rr = rr+"roll number"+"<input type='text' name='one' value=' '>";
rr = rr+"per "+"<input type='text' name='two' value=' '>";
rr = rr+"name "+"<input type='text' name='three' value=' '>";
rr = rr+"<input type='submit' name='t1' value='send '>";
rr = rr+"</form>";
rr = rr+"</body>";
res.send(rr);

  
})
app.post('/thank', urlencodedParser, function (req, res){
  var reply='';
  //reply += "first  number is" + req.body.one;
  //reply += "sec number is" + req.body.two; 
   roll = req.body.one;
  per=req.body.two;
  name=req.body.three;
  var sql =" insert into student(roll_no,per,name) values("+roll+","+per+","+"'"+name+"')";
//--------------------------------------------------------------------------------------//
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
con.query(sql, function (err, result) {
 if (err) throw err;
   //console.log("1 record inserted");
     //  console.log("statement ="+sql);
//  res.write("statement"+sql);
  
 // res.write("rec inserted");
 });

//------------------------------------------------------------------------------------//
 res.write("record inserted");
  res.end();
 }).listen(8080);