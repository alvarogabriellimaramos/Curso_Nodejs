// atualizado arquivos
const http = require("http");
const fs = require('fs');

const PORT = 8080;

http.createServer((request,response) => {
    response.writeHead(200,{"Content-Type": 'text/html'});
    const UrlParse = require('url').parse(request.url,true);
    const username = UrlParse.query.username; 
    fs.readFile('./index.html',function(err,data){
        if (err) {
            response.end(`<h1>Erro no servidor</h1>`);
            return;
        };
        response.write(data);
        const nameNewRow = username + '\r\n';
        if (!username) {
            response.end('<h1>Erro ao salva seu nome de usuario</h1>');
            return;
        };
        fs.appendFile('./username.txt',JSON.stringify({username:nameNewRow}),() => console.log('Arquivo salvo com sucesso'));
        response.end("<strong>Nome de usuario salvo com sucesso </strong>");
    })
}).listen(PORT,() => console.log(`Server Running ${PORT}`));