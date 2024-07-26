const http = require("http");
const fs = require("fs");
const server = http.createServer((request,response) => {
    response.writeHead(200,{'Content-Type': 'text/html'});

    if (request.method === 'GET' && request.url === '/html') {
        const data = fs.readFileSync('index.html');
        response.write(data);
    }
    response.end();
})
const PORT = 8080;
server.listen(PORT,() => console.log(`Server Running`));