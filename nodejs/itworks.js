var http = require('http');
var https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('/var/www/cgi/nodejs/ssl/node.key'),
  cert: fs.readFileSync('/var/www/cgi/nodejs/ssl/node.crt')
};
fs.readFile('/var/www/html/index.html', function (err, html) {
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(80);
    https.createServer(options, function(request, response) {  
	    response.writeHeader(200, {"Content-Type": "text/html"});  
	    response.write(html);  
	    response.end();  
    }).listen(443);
});
