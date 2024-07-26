const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = 8080;

http.createServer((request,response) => {
   
    const Query = url.parse(request.url,true);
    const File = Query.pathname.substring(1) // estamos utilizando o 1 como index inicial,pq caso não utilizemos iremos ter a barra no inicio / e para facilita a manipulação tiramos a barra
    if (Query.pathname === '/') {
        response.writeHead(200,{"Content-Type":'text/html'});
        response.end(`<h1>Olá mundo</h1>`)
        return;
    }
    if (File) {
        console.log(File);
       
        if (fs.existsSync(File)) {
            response.writeHead(200,{'Content-Type':'text/html'});
            fs.readFile(File,function(err,data) {
                if (err) {
                    console.log(err);
                    response.end('Erro no servidor');
                    return;
                }
                response.end(data);
                return;
            });
        }
        else {
            fs.readFile('./err/404.html',function(err,data) {
                response.writeHead(404,{"Content-Type":'text/html'});
                response.end(data);
                return;
            })
        }
    };
}).listen(PORT,() => console.log(`Server Running ${PORT}`))