const fs = require("fs");

fs.stat('./path',function(err,stat) {
    if (err) {
        console.log('Erro ao mostra detalhes do arquivo');
        return;
    };
    if (stat.isDirectory()) {
        console.log('O caminho é um diretorio');
        return;
    };
    console.log('Não é um diretorio')
});