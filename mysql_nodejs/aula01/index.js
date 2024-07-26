// Instalando o mysql no nodejs (driver)

const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teste'
});

connect.connect(function(err) {
    if (err) {
        console.log('Erro ao se conecta com banco de dados ' + err)
        return;
    };
    console.log('Conectado com sucesso ')
});

// inserindo dados na tabela 

function InsertValue(name,email) {
    const query = `INSERT INTO usuarios (nome,email) VALUES (
        '${name}',
        '${email}'
    )`;
   connect.query(query,function(err) {
    if (err) { 
        console.log('Erro ao criar query ' + err)
        return;
    }
    console.log('Query criada com sucesso');
   });
};

InsertValue('alvaro','alvarogabriel1103@gmail.com'); 