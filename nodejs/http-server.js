
var PORT = 8008;

var http = require('http'),
    fs = require('fs'),
    mime = require('mime');

var server = http.createServer(function(request, response) {

    var path = request.url;
    if (path == '/') {
        path += 'index.html';
    }

    fs.readFile('.' + path, function(error, data) {
        if (error) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            response.writeHead(200, { 'Content-Type': mime.lookup(path) });
            response.write(data);
        }
        response.end();
    });

});

server.listen(PORT, function() {
    console.log('Listening at port ' + PORT);
});
