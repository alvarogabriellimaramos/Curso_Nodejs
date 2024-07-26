const { pool } = require("../connect/index");

const Model = function (name, model, object) {
    this._model = model;
    this._name = name;
    this._config = object;
    if (!name || typeof name !== 'string') throw new Error('Type name not is string');

    if (typeof model !== 'object' || !model) return { messagem: 'ERRO: params model object is not type object', ok: false };
    const fields = Object.keys(model).map(key => {
        const type = model[key]
        return `${key} ${type}`
    }).join(', ')
    const sql = `CREATE TABLE IF NOT EXISTS ${name} (
            id INT AUTO_INCREMENT PRIMARY KEY,
            ${fields},
            created_ed TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
    pool(object).query(sql, function (err) {
        if (err) {
            console.log(err)
            return;
        };
        return { messagem: 'Table sucess create', ok: true }
    });
};

Model.prototype.insert = function (object) {
    if (!object || typeof object !== 'object') throw new Error('param object not type object');
    const keysInsert = Object.keys(object);
    const keysModel = Object.keys(this._model);
    for (let key of keysInsert) {
        if (keysModel.indexOf(key) === -1) {
            console.log(`Key ${key} not found `);
        }
        else {
            const values = Object.keys(object).map(key => object[key])
            const placeholders = values.map(() => '?').join(', ');
            const columns = keysModel.join(',');
            const sql = `INSERT INTO ${this._name} (${columns}) VALUES (${placeholders}) `
            pool(this._config).query(sql,values,function (err) {
                if (err) {
                    return console.log('Erro ' + err);
                };
                console.log('true');
            });
            return sql;
        };
    };
};
Model.prototype.find = function() {
    const sql = `SELECT * FROM ${this._name}`;
    return new Promise((resolve,reject) => {
        pool(this._config).query(sql,function(err,data) {
            if (err) {
                reject({messagem: 'Error: Error response data'});
            }
            resolve(data)
        });
    });
};

Model.prototype.findOne = function (object) {
    
    return new Promise((resolve,reject) => {
        if (typeof object !== 'object') reject({messagem: 'param object type not is object'})
        const sql = `SELECT * FROM ${this._name} WHERE ${object.column} = ?`;
        if (object.column === 'id') {
            pool(this._config).query(sql,object.data,function(err,data) {
                if (err) {
                    reject({messagem: 'Error: Error response data ' + err});
                }
                if (data.length === 0) resolve('Data not found');
                resolve(data.find(data => data));
            });
            return;
        };
        pool(this._config).query(sql,object.data,function(err,data) {
            if (err) {
                reject({messagem: 'Error: Error response data ' + err});
            }
            if (data.length === 0) resolve('Data not found');
            resolve(data);
        });
    });
};
Model.prototype.delete = function (object) {
    return new Promise((resolve,reject) => {
        if (typeof object !== 'object') reject({messagem: 'param object type not is object'});
        const sql = `DELETE FROM ${this._name} WHERE = ${object.column} = ?`;
        pool(this._config).query(sql,object.data,function(err,data) {
            if (err) {
                reject({messagem: 'Error: Error response data ' + err});
            }
            resolve({messagem: 'Item delete with sucess'});
        });
    });
};

module.exports = Model;