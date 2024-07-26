const http = require("http");

const server = http.createServer((request,response) => {
    response.end("Ola mundo");
});

server.listen(8000,() => console.log(`Server Running 8000`));

// parei na aula 36