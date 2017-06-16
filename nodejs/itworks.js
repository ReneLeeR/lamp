var http = require('http');
var https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('/var/www/cgi/nodejs/ssl/node.key'),
  cert: fs.readFileSync('/var/www/cgi/nodejs/ssl/node.crt')
};
http.createServer(function(request, response) {  
  if(request.url == "/")
  {
    fs.readFile("/var/www/html/index.html", function (error, pgResp) 
    {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(pgResp);
      response.end();
    });
  } 
  else
  {
    fs.readFile("/var/www/html/404/index.html", function (error, pgResp) 
    {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(pgResp);
      response.end();
    });
  }
}).listen(80);
https.createServer(options, function(request, response) {
  if(request.url == "/")
  {
    fs.readFile("/var/www/html/index.html", function (error, pgResp) 
    {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(pgResp);
      response.end();
    });
  } 
  else
  {
    fs.readFile("/var/www/html/404/index.html", function (error, pgResp) 
    {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(pgResp);
      response.end();
    });
  }
}).listen(443);
;