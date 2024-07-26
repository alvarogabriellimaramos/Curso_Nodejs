// codigo sincrono e assicrono 
const fs = require("fs");

console.log("Inicio");

fs.writeFileSync('teste.json',JSON.stringify({
    messagem: 'Codigo sincrono'
},null,2));

console.log('Fim');

