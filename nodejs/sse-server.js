
var PORT = 8008;

var http = require('http'),
    SSE = require('sse');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('ok');
});

server.listen(PORT, function() {
    console.log('Listening at port ' + PORT);
    var sse = new SSE(server);
    sse.on('connection', function(client) {
        console.log('Client connected');
        setInterval(function() {
            var msg = 'Server time: ' + new Date();
            console.log('Send message: ' + msg);
            client.send(msg);
        }, 3000);
    });
});

/*
    var es = new EventSource('/sse');
    es.onmessage = function(event) {
        console.log(event.data);
    };
*/
