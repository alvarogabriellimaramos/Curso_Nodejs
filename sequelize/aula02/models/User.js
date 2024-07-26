const { DataTypes } = require('sequelize');

const db = require('../data/db');

const User = db.define('User',{
    username: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = User;