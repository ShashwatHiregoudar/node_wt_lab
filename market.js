var http = require('http');
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var name1;

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "a",
    database: "shopping"
});

app.get('/', function (req, res){
    var rr = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
            
    </head>
    <body>
    <br><br><br><br><br><br>
        <div class="container">
            <center>
                <form method="post" action="/">
                    <button class="btn" formaction="signup" name="submitbtn">
                            Sign Up
                    </button>
                    <button class="btn" formaction="signin" name="submitbtn">
                            Sign In
                    </button>
                </form>
            </center> 
        </div>
    </body>
    </html>
    `;
    
    res.send(rr);
})
app.post('/signup', function(req, res){
    var rr = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
            
    </head>
    <body>
    <br><br><br><br><br><br><br><br>
        <div class="container">
            <center>
                <form method="post" action="/">

                    <input type="text" name="name" placeholder="Name">
                    <input type="text" name="username" placeholder="Username">
                    <input type="text" name="address" placeholder="Address">
                    <input type="text" name="password" placeholder="Password">
                    <button class="btn" formaction="signupsuccess" name="submitbtn">
                        Sign Up
                    </button>
                </form>
            </center>    
        </div>
    </body>
    </html>
    
    `;
    res.send(rr);

})
app.post('/signupsuccess', urlencodedParser, function(req, res){
    var name = req.body.name;
    var username = req.body.username;
    var address = req.body.address;
    var password = req.body.password;

    console.log(name);
    console.log(username);
    console.log(address);
    console.log(password);

    var sqlquerry = "INSERT INTO users values('"+name+"','"+username+"','"+address+"','"+password+"');";
    console.log(sqlquerry);
    con.query(sqlquerry, function (err, res) {
        if (err) throw err;
        console.log("INSERT INTO users values('"+name+"','"+username+"','"+address+"','"+password+"');" + "----------- Action Done");
    });
    res.send("<h3>Succesful</h3>");
})
app.post('/signin', function(req, res){
    var rr = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <!-- Compiled and minified CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    
      <!-- Compiled and minified JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
              
    </head>
    <body>
        <div class="container">
        <br><br><br><br><br><br><br><br><br>
            <center>
                <form method="post" action="/">
                    <input type="text" name="username" placeholder="Username">
                    <input type="password" name="password" placeholder="Password">
                    <button class="btn" formaction="signinsucess" name="submitbtn">
                        Sign In
                    </button>
                </form>
            </center>    
        </div>
    </body>
    </html>`;
    res.send(rr);
})

app.post('/signinsuccess', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    var pwd = "select password from users where username="+username+";"   ;
    //console.log(pwd);
    /*if (pwd!=password){
        alert('not found');
        stop();
    }*/
    console.log(pwd);
    con.query(pwd , function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    var rr = `
    <h1>lets go Shopping</h1>
    <form method="post" action="/">
    <button formaction="shop" name="shop">Shop</button>
    <form>
    `;
    res.send(rr);
})

app.get('/shop', function(req, res){
    var rr = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Documedskuwnt</title>
    <!-- Compiled and minified CSS -->
  <!--link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

  <!-- Compiled and minified JavaScript -->
  <!--script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script-->
          
</head>
<body>
    <div class="container">
        <center>
            <form method="post" action="/">
                Apples: <input type="number" name="applequantity"><br><br>
                Banana: <input type="number" name="bananaquantity"><br><br>
                Orange: <input type="number" name="orangequantity"><br><br>
                Watermelon: <input type="number" name="waterquantity"><br><br>
                Chikku: <input type="number" name="chikkuquantity"><br><br>
                <button class="btn" formaction="signinsucess" name="submitbtn">
                    Checkout and pay
                </button>
            </form>
        </center>    
    </div>
</body>
</html>
    `;
    res.send(rr);
})




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



app.get('/r', function (req, res) {
    var rr = `
    <html>

    <head>
        <title>Making Get Requests</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous">
    </head>

    <body>
        <h1>Shopping Cart</h1>
        <form method='post' action='/'>
            <div class="col-md-4" style="padding-top: 10px;">
                <div class="form-group">
                    <input type="text" class="form-control" name="name" placeholder="Name" />
                </div>
               
                <div class="form-group">
                    <input type="date" class="form-control" name="date1" placeholder="DATE" />
                </div>
                <div class="form-group">
                    <input type="time" class="form-control" name="time1" placeholder="TIME" />
                </div>
                <div class="form-group">
                    <input type="number" class="form-control" name="balance" placeholder="BALANCE" />
                </div>
                <div class="form-group">
                    <input type="number" class="form-control" name="amount" placeholder="ENTER AMOUNT" />
                </div>
        

                
                <div class="form-group">
                    <button class="button button-default" formaction="AddtoDb" name="submitbtn" type="submit" value="ins">Create Account</button>
                    <button class="button button-default" formaction="deposit" name="submitbtn" type="submit" value="search">Deposit</button>
                    <button class="button button-default" formaction="Withdrawal" name="submitbtn" type="submit" value="search">Withdrawal Money</button>
                </div>
            </div>
        </form>
    </body>
    </html>
    `;
    res.send(rr);
})





app.post('/AddtoDb', urlencodedParser, function (req, res) {
    var accountno = parseInt(req.body.accountno);
    var name = req.body.name;
    var date1 = req.body.date1;
    var time1 = req.body.time1;
    var balance = parseFloat(req.body.balance);

    var sql = "INSERT INTO account values(" + accountno + ",'" +name +"','" + date1 + "','" +time1 +"'," + balance + ");";
    console.log(sql);
    con.query(sql, function (err, res) {
        if (err) throw err;
        console.log(accountno + " " + name + " " + date1 + " " + time1 + " " + balance + " Inserted");
    });
    //res.redirect("/r");
    res.send("Insert Successfully");
    res.end();
});

app.post('/deposit', urlencodedParser, function (req, res) {
    var accountno = parseInt(req.body.accountno);
    
    
    var amount = parseFloat(req.body.amount);
   
   // var x = money+amt;

    var sql = "UPDATE account b SET b.balance = b.balance+'"+amount+"' WHERE b.accountno="+accountno;
    console.log(sql);
    con.query(sql, function (err, res) {
        if (err) throw err;
        //console.log(accno + " " + name + " " + time + " "+ date +" "+money+ "Inserted");
    });
    //res.redirect("/r");
    res.send("Deposited Successfully");
    res.end();
});


app.post('/Withdrawal', urlencodedParser, function (req, res) {
    var accountno = parseInt(req.body.accountno);
    
    
    var amount = parseFloat(req.body.amount);
   
   // var x = money+amt;

    var sql = "UPDATE account b SET b.balance = b.balance-'"+amount+"' WHERE b.accountno="+accountno +"and b.balance>500" ;
    console.log(sql);
    con.query(sql, function (err, res) {
        if (err) throw err;
        //console.log(accno + " " + name + " " + time + " "+ date +" "+money+ "Inserted");
    });
    //res.redirect("/r");
    res.send("Withdraw  Successfully");
    res.end();
});


app.listen(9000);