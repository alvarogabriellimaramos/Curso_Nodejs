const express = require('express');

const app = express();

const port = 8080;
const checkAuth = (request,response,next) => {
    request.Auth = true;
    if (request.Auth) {
        return response.send('Usuario logado')
    }
    return response.send("Usuario não está logado")
}
app.use(checkAuth);
app.get('/',(request,response) => {
    return response.send('Ola,Mundo')
});

app.listen(port,() => console.log(`Server Running ${port}`));