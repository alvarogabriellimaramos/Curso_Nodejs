const { DataTypes } = require('sequelize');

const db = require('../data/db');

const User = db.define('User',{
    username: {
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = User;