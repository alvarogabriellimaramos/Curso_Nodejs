const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'teste'
});

const id = 1;
const Query = `DELETE FROM usuarios WHERE id = ?`

pool.query(Query,id,function(err,data) {
    if (err) {
        console.log('Erro na query ' + err);
        return;
    }
    console.log(data);
})