const {DataTypes} = require("sequelize");

const db = require('../data/db');

const Persons = db.define("Persons",{
    name: {
        type: DataTypes.STRING
    },
    class: {
        type: DataTypes.STRING
    },
    atributted: {
        type: DataTypes.STRING
    }
});

const User = require('./User');

// criando o relacionamento com belongsTo;
Persons.belongsTo(User,{ onDelete:"CASCADE" });
//dizendo para o banco de dados qual sera o tipo de relacionamento,nesse caso será one-to-Many
User.hasMany(Persons);
module.exports = Persons;
