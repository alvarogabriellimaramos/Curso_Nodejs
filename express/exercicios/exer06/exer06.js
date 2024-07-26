const express = require('express');
const app = express();
const PORT = 8080; 

const data = [
    {nome: 'alvaro',idade:18,profissão: 'programador',id:'1'},
    {nome: 'gabriel',idade:19,profissão: 'engenheiro civil',id:'2'},
    {nome: 'maria',idade:18,profissão: 'gastronomo',id:'3'},
    {nome: 'pedro',idade:25,profissão: 'policial',id:'4'},
    {nome: 'matheus',idade:22,profissão: 'mecanico',id:'5'},
    {nome: 'ramos',idade:20,profissão: 'zelador',id:'6'},
];

const ids = [];
for (let c of data) {
    ids.push(c.id);
};

app.get('/users/:id',(request,response) => {
    const userId = request.params.id;
    if (ids.indexOf(userId) === -1) {
        return response.json({messagem: 'Id não encontrado'});
    };
    for (let people of data) {
        if (userId === people.id) {
            return response.json({people});
        };
    }
});

app.listen(PORT , () => console.log(`Server Running ${PORT}`));