
var PORT = 8008;

var ws = require('ws');

var wsServer = new ws.Server({port: PORT });

console.log('Listening at port ' + PORT);

wsServer.on('connection', function(ws) {

    console.log('Client connected');

    ws.on('message', function(msg) {
        console.log('Message: ' + msg);
        ws.send(msg.toUpperCase());
    });

    ws.on('close', function() {
        console.log('Cliend disconnected');
    });

});
