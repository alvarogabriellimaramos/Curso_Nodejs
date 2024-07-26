const http = require('http');
const url = require('url');
const fs = require("fs/promises");

async function Write(file) {
    try {
        await fs.writeFile(file,'Arquivo criado com sucesso');
        return `Arquivo criado com sucesso`;
    }
    catch (e) {
        console.log(e);
        return `Erro no servidor,tente novamente mais tarde.`
    }
}

const server = http.createServer(async (request,response) => {
    response.writeHead(200,{"Content-Type":'text/html'});
    const UrlParse = url.parse(request.url,true);
    const file = UrlParse.query.file;
    if (!file) {
        response.end(`
        <strong>Criar arquivo</strong>
        <form>
            <input type='text' name='file'>
            <button>Criar arquivo </button>   
        </form>
        `);
        return;
    };
    const result = await Write(file)
    response.end(`<strong>${result}</strong>`);
})

const PORT = 8080;

server.listen(PORT,() => console.log(`Server Running ${PORT}`));