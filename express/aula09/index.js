// criando uma pagina 404 caso o usuario acesse uma rota que não existe
const express = require('express');

const app = express();

const PORT = 8080;

app.get('/',(request,response) => {
    return response.json({messagem: 'Rota Home'});
});

app.get('/json',(request,response) => {
    return response.json([
        {name: 'lava os pratos',done:false},
        {name: 'lava o banheiro',done:true},
        {name: 'Varre a casa',done:false}
    ]);
});
// coloca sempre o middleware de 404 em baixo dos outros middleware
app.use(function(request,response) {
    const basePath = require('path').join(__dirname,'404.html');
    return response.status(404).sendFile(basePath);
});

app.listen(PORT,() => console.log(`Server Running ${PORT}`));
