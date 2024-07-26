const fs = require("fs");

console.log('inicio');

fs.writeFile('./teste.json',JSON.stringify({
    messagem: 'Codigo assicrono'
},null,2),err => {
    if (err) {
        console.log('Erro');
        return;
    };
    console.log('Sucesso');
});

console.log('fim');