var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    path = process.argv[3];

var server = http.createServer(function (req, res) {
    fs.createReadStream(path).pipe(res);
});

server.listen(port);