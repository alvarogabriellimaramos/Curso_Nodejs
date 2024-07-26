const express = require('express');
const app = express();
const session = {req:0};
const checkRequest = function (request,response,next) {
    session.req++
    console.log(session);
    if (session.req === 3) {
        session.req = 0;
        return response.json({messagem: 'Limite de solicitações execedido,renicie a pagina'});
    };
    next();
};
app.use(checkRequest);   
app.get('/',(request,response) => {
    response.send('Home')
})

app.listen(8080,() => console.log(`Server Running 8080`));