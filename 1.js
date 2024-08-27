var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Day la 1!');
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');