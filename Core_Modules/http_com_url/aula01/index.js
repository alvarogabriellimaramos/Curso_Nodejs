const http = require('http');

const url = require('url');

const server = http.createServer( (request,response) => {
    response.writeHead(200,{"Content-Type": 'text/html'});
    const UrlInfo = url.parse(request.url,true);
    const name = UrlInfo.query.name;

    if (!name) {
        response.end(`
            <h1> Preencha seu nome </h1>
            <form>
                <input type='text' name='name'>
                <button>Enviar</button>
            </form>
        `);
        return;
    };
    response.end(`<p> seja bem vindo ${name} </p>`);
});

const PORT = 8080;

server.listen(PORT,() => console.log(` Server Running ${PORT} `));