var http = require('http');

var client = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end();
    req.connection.destroy();
});

client.listen(80)
console.log('Server listening on port 80')
