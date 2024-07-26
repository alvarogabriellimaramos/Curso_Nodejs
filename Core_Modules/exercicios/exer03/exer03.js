const http = require("http");
const fs = require('fs/promises');

async function Read (file) {
    try {
        const content = await fs.readFile(file,'utf-8');
        return content;
    }
    catch (e) {
        console.log(e);
        return 'Erro no servidor,tente novamente mais tarde';
    };
};

const server = http.createServer(async (request,response) => {
    if (request.url === '/tasks' && request.method === 'GET') {
        const content = await Read('./test.json');
        response.write(content);
    };
    if (request.url === '/') response.write("Rota principal");

    response.end();
});

server.listen(8000,() => console.log(`Server Running 8000`));