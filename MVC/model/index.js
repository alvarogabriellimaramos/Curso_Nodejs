//arquivo de exemplo
const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');

const Users = db().define('Users',{
    username: {
        type: DataTypes.STRING
    }
})