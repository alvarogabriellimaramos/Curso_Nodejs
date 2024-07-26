// retornando html simples com http 
const http = require('http');

const server = http.createServer((request,response) => {
    // definimos o header do http
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write('<h1>Olá mundo</h1>');
    response.end();
});

server.listen(8000,() => console.log(`Server Running 8000`));