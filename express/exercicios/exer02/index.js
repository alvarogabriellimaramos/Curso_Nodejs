const express = require('express');

const app = express();

const AuthWithMathRandom = function (request,response,next) {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const random = Math.floor(Math.random() * numbers.length);
    if (random === 6) {
        next()
        return;
    };
    console.log(random);
    return response.json({messagem: 'Erro você precisa se autentica primeiro'})
} 
app.use(AuthWithMathRandom);

app.get('/',(request,response) => response.send("Rota protegida"));
app.listen(8080,() => console.log('Server Running 8080'));