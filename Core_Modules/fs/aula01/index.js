const http = require("http");
const fs = require('fs');
const PORT = 8080;

http.createServer((request,response) => {
    response.writeHead(200,{'Content-Type': 'text/html'});
    fs.readFile('mensagem.html',(err,data) => {
        if (err) {
            response.end(`<h1>Erro no servidor</h1>`);
            return;
        }
        response.write(data);
        response.end();
    })
}).listen(PORT,() => console.log(`Server Running ${PORT}`));