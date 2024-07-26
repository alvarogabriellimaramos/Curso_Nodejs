const http = require('http');
const url = require('url');

const server = http.createServer((request,response) => {
    const UrlParse = url.parse("https://web.whatsapp.com/",true);
    response.write('Url completa');
    const JsonUrl = JSON.stringify(UrlParse,null,2);
    response.write(JsonUrl);
    response.end();
});

const PORT = 8080;
server.listen(PORT,() => console.log(`Server Running ${PORT}`));
