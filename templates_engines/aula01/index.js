// utilizando o express-handlebars

const express = require('express');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({})
const app = express();

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');


app.get('/',(request,response) => {
    return response.render('home')
})
app.get('/pag2',(request,response) => {
    return response.render('page2')
})
app.listen(8080,() => {
    console.log('Server Running 8080');
});
