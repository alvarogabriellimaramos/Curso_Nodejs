const express = require("express");
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
    const tasks = [
        {name: 'Lava os pratos',done: true,id:1},
        {name: 'Lava o banheiro',done:false,id:2},
        {name: 'Limpa o fogão',done:true,id:3},
        {name: 'Varre o quintal',done:false,id:4}
    ];
    return response.render('home',{tasks});
})


app.listen(8080,() => console.log('Server Running 8080'));