const http = require('http');
const myModule = require('./home');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>${myModule.getMessage()}</h1>`);
    res.end();
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});