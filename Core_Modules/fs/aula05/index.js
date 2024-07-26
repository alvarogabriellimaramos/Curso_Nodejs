// renomeado arquivos 
const fs = require('fs');

fs.rename('arquivo.txt','newarquivo.txt',function(err) {
    if (err) {
        console.log(' Erro ao renomear arquivo ');
        return;
    }
    console.log('Arquivo renomeado com sucesso');
});