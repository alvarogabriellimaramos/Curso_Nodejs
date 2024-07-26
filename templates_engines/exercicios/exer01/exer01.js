const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const hbs = exphbs.create({});
app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

app.get('/',(request,response) => {
    const data = {
        name: 'Álvaro',
        age: 18
    }
    return response.render('home',data);
});

app.listen(8080,() => console.log('Server Running'));