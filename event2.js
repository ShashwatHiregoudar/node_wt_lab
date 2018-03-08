var url = require('url');
var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var a;
var b,c,c1;
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
  	var q = url.parse(req.url, true).query;
   	a =q.a;
  	b = q.b;
  	a =parseInt(a);
 	b = parseInt(b);   
 	var max = function () {
		res.write("max is"+c +'<br>');
		res.write(""+"\n")
 	} 
	var min = function (){
		res.write("min is "+ c1);
 	}
	var invalid = function(){
		res.write("Give the valid input");
	}
	//Assign the event handler to an event:
	eventEmitter.on('correct', max);
	eventEmitter.on('wroung', min);
	eventEmitter.on('invalid', invalid);
	//Fire the 'scream' event:
	if (a>0 && b>0){
		if (a>b){
			c=a;
		}
		else{
			c=b;
		}	
		eventEmitter.emit('correct');
		if (a<b){
			c1=a;
		}
		else{
			c1=b;	
		}
		eventEmitter.emit('wroung');
	}
	else{
		eventEmitter.emit('invalid');
	}
}).listen(8080);