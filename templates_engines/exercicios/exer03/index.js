const express = require('express');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({
    helpers: {
        eq: (a,b) => a === b
    }
});
const app = express();


app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

app.get('/',(request,response) => {
    const data = {
        name: 'Maria',
        age: 19
    };
    return response.render('home',data);
});

app.listen(8080,() => console.log('Server Running 8080'));