// criando um layout simples 
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({})
const app = express();


app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');
const data = {
    name: 'Alvaro',
    idade: 19,
    profissão: 'Programador'
};

app.get('/',(request,response) => {
    return response.render('home/home',data);
})
app.listen(8080,() => console.log(`Server Running`));