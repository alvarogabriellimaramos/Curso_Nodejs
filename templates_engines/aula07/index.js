const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Configuração da engine de visualização e dos partials
const hbs = exphbs.create({
    partialsDir: ['views/partials']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const posts = [
    {
        title: 'JavaScript: a linguagem mais famosa do mundo',
        name: 'JavaScript'
    },
    {
        title: 'Python: a linguagem que mudou tudo',
        name: 'Python'
    }
];

app.get('/', (req, res) => {
    return res.render('home/home', { posts });
});

app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
