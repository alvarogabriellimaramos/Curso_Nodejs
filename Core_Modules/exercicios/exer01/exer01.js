const http = require('http');

const PORT = 8080;

const server = http.createServer((request,response) => {
    response.write("Ola mundo");
    response.end();
});

server.listen(PORT,() => console.log(`Server Running ${PORT}`));

