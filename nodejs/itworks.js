var http = require('http');
var https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('/var/www/cgi/nodejs/ssl/node.key'),
  cert: fs.readFileSync('/var/www/cgi/nodejs/ssl/node.crt')
};
http.createServer(function(request, response) {  
  fs.readFile((request.url.charAt(request.url.length-1) == "/") ? "/var/www/html"+request.url+"index.html" : "/var/www/html" + request.url, function (error, pgResp) 
  {
    console.log(request.url);
    if(error)
    {
      fs.readFile("/var/www/html/404/index.html",function(error, notfound)
      {
        response.writeHead(200);
        response.write(notfound);
        response.end();
      });
    }
    else
    {
      response.writeHead(200);
      response.write(pgResp);
      response.end();
    }
  });
}).listen(80);
https.createServer(options, function(request, response) {
  fs.readFile((request.url.charAt(request.url.length-1) == "/") ? "/var/www/html"+request.url+"index.html" : "/var/www/html" + request.url, function (error, pgResp) 
  {
    console.log(request.url);
    if(error)
    {
      fs.readFile("/var/www/html/404/index.html",function(error, notfound)
      {
        response.writeHead(200);
        response.write(notfound);
        response.end();
      });
    }
    else
    {
      response.writeHead(200);
      response.write(pgResp);
      response.end();
    }
  });
}).listen(443);
