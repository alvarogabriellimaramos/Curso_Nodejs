const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
});


const InsertUsers = `INSERT INTO users (username,email) VALUES ('alvaro','alvarogabriel@teste.com')`;


const err = err => err ? console.log(err): console.log('Sucesso');

connect.query(InsertUsers,function (Err,data) {
    const InsertProfiles = `INSERT INTO profiles (bio,photo,user_id) VALUES ('teste','url','${data.insertId}')`
    connect.query(InsertProfiles,function(err,data) {
        if (err) {
            console.log(err);
            return;
        };
        console.log('Sucesso')
    });
});
