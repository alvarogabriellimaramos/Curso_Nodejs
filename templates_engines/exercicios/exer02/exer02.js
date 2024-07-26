const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({});

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

app.get('/',(request,response) => {
    const data = {
        name: 'Alvaro',
        age: 18,
        profissão: 'Programador'
    };
    return response.render('home',data);
});
app.get('/nav',(request,response) => {
    return response.render('nav/nav');
})
app.listen(8080,() => console.log('Server Running 8080'))