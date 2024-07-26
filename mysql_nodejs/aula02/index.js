const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teste'
});


connect.connect(function(err) {
    if (err) {
        console.log('Erro ao se conecta com o banco de dados ' + err);
        return;
    };
    console.log("Banco de dados conectado com sucesso");
});

function SelectAll () {
    const query = 'SELECT * FROM usuarios';
    connect.query(query,function(err,data) {
        if (err) {
            console.log("Erro ao executa query " + err);
            return;
        }
        console.log(data);
    });
}

SelectAll();