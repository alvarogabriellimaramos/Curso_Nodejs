const express = require("express");
const app = express()

app.get('/',(req,res) => {
    return res.send('Rota principal');
});

app.get('/users/:id',(req,res) => {
    return res.send(`Estamos buscando pelo usuario ${req.params.id}`);
});

app.listen(8080,() => console.log('Server Running 8080'));

