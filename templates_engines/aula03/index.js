// utilizando condicionais no hbs 
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({})
const app = express();


app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

app.get('/',(request,response) => {
    const auth = false;
    const aproved = true
    return response.render('home/home',{auth,aproved});
});



app.listen(8080,() => console.log('Server Running 8080'));