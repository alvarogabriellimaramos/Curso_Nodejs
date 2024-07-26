const express = require("express");

const app = express();

const port = 8080;

app.get('/json',(request,response) => {
    return response.status(200).json({
        message: 'Bem vindo ao meu servidor express',
        ok: true
    });
});

app.listen(port,() => console.log(`Server Running ${port}`));