var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Hello World');
    res.end("<h1>Good Morning</h1>");
}).listen(8080);
