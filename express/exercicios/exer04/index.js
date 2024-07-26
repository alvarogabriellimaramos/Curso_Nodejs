const express = require("express");
const path = require('path');

const app = express();
const BasePath = path.join(__dirname,'src/views');

let admin = false;

const Authorization = function (request,response,next) {
    const {name} = request.body;
    if (name === 'true') {
        admin = true;
        next();
    }
    else {
        admin = false
        return response.json({messagem: 'Erro: você não pode acessa a rota protegida'})
    }
};

app.use(express.urlencoded({extended:true}));

app.use('/validation',Authorization,(request,response) => {
    if (admin) {
        return response.sendFile(`${BasePath}/home/home.html`);
    }
});

app.get('/',(req,res) => {
    return res.sendFile(`${BasePath}/index.html`);
});

app.listen(8080,() => console.log(`Server Running 8080`));