const express = require('express');

const app = express();

const perfil = 'comum';

const AuthRouter = function (request,response,next) {
    if (perfil === 'admin') {
        return response.send('Sucesso');
    };
    return response.json({messagem: 'Você não tem permissão para acessa essa rota'})
};
app.use('/admin',AuthRouter);

app.get('/',(req,res) => {
    res.send('Pagina principal')
})

app.listen(8080,() => console.log('Server Running 8080'));