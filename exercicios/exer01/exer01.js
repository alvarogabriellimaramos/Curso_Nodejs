const { promises } = require("nodemailer/lib/xoauth2");
const { Sequelize } = require("sequelize");
const {DataTypes} = require('sequelize');

const db= new Sequelize('crud','root','',{
    host: "localhost",
    dialect: "mysql",
});


const User = db.define('User',{
    username: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    }
});

const Profile = db.define('Profile',{
    bio: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    }
});

Profile.belongsTo(User,{foreignKey:"userId",onDelete:"CASCADE"});
User.hasOne(Profile,{foreignKey: "userId"});

(async () => {
    await db.sync({force:true})
    const user = await User.create({username: 'Alvaro',email:"alvaro@teste.com"});
    await Profile.create({
        bio: "Bem vindo ao meu perfil",
        avatar: "https://example.com/uploads/avatar.png",
        userId: user.id});
    console.log('Dados inserido com sucesso')
})()