const { Sequelize } = require("sequelize");
const {DataTypes} = require('sequelize');

const db = new Sequelize('crud','root','',{
    host: "localhost",
    dialect: "mysql",
});

const Author = db.define('Author',{
    name: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING
    }
});

const Books = db.define('Books',{
    title: {
        type: DataTypes.STRING
    },
    pages: {
        type: DataTypes.INTEGER
    },
    genrer: {
        type: DataTypes.STRING
    }
});

Author.hasMany(Books,{foreignKey: "authorId"});
Books.belongsTo(Books,{foreignKey: 'authorId',onDelete: "CASCADE"});

(async () => {
    await db.sync({force:true});
    const author = await Author.create({name: "Alvaro",email: 'teste@email.com'});
    const books = await Books.bulkCreate([
        {title: "o principe",pages:120,genrer:"suspense",authorId: author.id},
        {title: "teste",pages:120,genrer:"drama",authorId: author.id}
    ]
    );

    console.log('Dados inserido com sucesso')
})()