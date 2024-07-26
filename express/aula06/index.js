const express = require("express");
const app = express();

const users = [];

const ids = [];
// server para transforma todos os dados enviando no body em json,facilitando a manipulação
app.use(express.json());
// server para transforma os dados enviando atráves do formulario em json,facilitado a manipulação
app.use(express.urlencoded({extended:true}));
app.get('/users/:id',(request,response) => {
    if (users.length === 0 ) {
        return response.send('<h1>Nenhum usuario no sistema </h1>');
    };
    const userId = request.params.id;
    if (ids.indexOf(userId) === -1) {
        return response.send('Usuario não encontrado');
    };
    for (let people of users) {
        if (userId === people.id) {
            return response.json({people});
        }
    }
});

app.post('/adduser',(request,response) => {
    const {name,id} = request.body
    if (ids.indexOf(id) === -1) {
        users.push({name,id});
        ids.push(id);
        console.log(users);
        return response.json({messagem: 'Usuario adicionado com sucesso'});
    };
    return response.json({messagem: 'Esse usuario já está adicionado'});
});

app.listen(8080,() => console.log('Server Running 8080'));