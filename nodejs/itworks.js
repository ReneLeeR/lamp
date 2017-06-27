var fs = require('fs');
var http = require('http');
var https = require('https');
var favicon = require('serve-favicon');
var credentials = {key: fs.readFileSync('/var/www/cgi/nodejs/ssl/node.key', 'utf8'), cert: fs.readFileSync('/var/www/cgi/nodejs/ssl/node.crt', 'utf8')};
var express = require('express');
var app = express();

app.use(express.static("/var/www/html"));
app.use(favicon("/var/www/html/favicon.ico")); 

app.get('/', function(req,res) {
    res.send(fs.readFileSync('/var/www/html/index.html', 'utf8'));
});

app.get('*', function(req, res){
    res.send(fs.readFileSync('/var/www/html/404/index.html', 'utf8'));
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);
