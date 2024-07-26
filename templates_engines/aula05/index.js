const express = require("express");
const exphbs = require('express-handlebars');

const app = express();
const hbs = exphbs.create({});

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

const tasks = [
    {name: 'Lava os pratos',done: true,id:1},
    {name: 'Lava o banheiro',done:false,id:2},
    {name: 'Limpa o fogão',done:true,id:3},
    {name: 'Varre o quintal',done:false,id:4}
];
// como o hbs trabalha com um template mais limpo,temos que fazer as principais validações do lado do servidor e depois passa para o front-end
app.get('/',(request,response) => {
    const TaskCompleted = tasks.filter(task => task.done === true)
    return response.render('home/home',{TaskCompleted});
})

app.listen(8080,() => console.log('Server Running 8080'));