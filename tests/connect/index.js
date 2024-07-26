const mysql = require('mysql');

module.exports.pool = function (object) {
    if (typeof object !== 'object') throw new Error('ERRO:param not object');
    const config = {
        host: object.host,
        user: object.user,
        password: object.password,
        database: object.database,
        connectionLimit: object.pool
    };
    return mysql.createPool(config);
};