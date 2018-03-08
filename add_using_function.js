var url = require('url');
var http = require('http');

function add(x,y)
{
	  var ans 
	 ans = x+y;
	 return ans;
	
}
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var a = q.num1;
  var b = q.num2;
  var ans=add(a,b);
  
  num1 = parseInt(a);
  num2 = parseInt(b);
  
  
	var ans1 =num1+num2;
     res.write(" sum = "+ ans1);
	 res.end();
  
}).listen(8080);