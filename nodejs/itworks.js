var https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('/var/www/cgi/nodejs/ssl/node.key'),
  cert: fs.readFileSync('/var/www/cgi/nodejs/ssl/node.crt')
};


https.createServer(options, function (req, res) {
  var html = buildHtml(req);
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(443);
function buildHtml(req) {
  var header = '<title>Bootstrap Example</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="httpss://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="httpss://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script><script src="httpss://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>';
  var body = '<div class="container"><h1>It Works</h1><p>Demo Page</p><p>Docker ITATecNM LEMN Server By: Rene Lee Ramirez & Ivan Gerardo Caldera Hermosillo</p></div>';
  return '<!DOCTYPE html><html><header>' + header + '</header><body>' + body + '</body></html>';
};
var http = require('http');
http.createServer(function (req, res) {
  var html = buildHtml(req);
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(80);
function buildHtml(req) {
  var header = '<title>Bootstrap Example</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>';
  var body = '<div class="container"><h1>It Works</h1><p>Demo Page</p><p>Docker ITATecNM LEMN Server By: Rene Lee Ramirez & Ivan Gerardo Caldera Hermosillo</p></div>';
  return '<!DOCTYPE html><html><header>' + header + '</header><body>' + body + '</body></html>';
};
