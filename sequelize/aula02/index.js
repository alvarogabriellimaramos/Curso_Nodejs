// relacionamentos mysql,a anotações estara nos caderno caso tenha alguma dúvida,lembrando que o exemplo de relacionamento desse código é de one-to-many um para muitos.
const express = require("express");
const app = express();

const db = require('./data/db');

const User = require('./models/User');
const Persons = require("./models/Persons");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.get("/", function (request, response) {
    return response.status(300).redirect("/index.html");
})

app.post("/register", async (request, response) => {
    // rota simples de registros
    const { username, email, password } = request.body;
    if (!username || !email || !password) return response.status(400).json({ messagem: 'Credenciais inválidas' });
    const UserExists = await User.findOne({ where: { username} });
    if(!UserExists) {
        await User.create({username,email,password})
        return response.status(300).redirect("/personagens.html");
    };
    return response.status(401).json({messagem: 'Esse usuario já existe'})
});

app.post('/login',async (request,response) => {
    // rota simples de login
    const {username,password} = request.body;
    if (!username || !password) return response.status(400).json({ messagem: 'Credenciais inválidas' });
    const user = await User.findOne({where: {username}});
    if (!user) return response.status(404).json({messagem: 'Esse usuario não existe'})
    if (user.username === username && user.password === password) {
        return response.status(200).redirect(`/personagens.html?user=${user.username}&email=${user.email}`);
    };
    return response.status(400).json({messagem: 'Senha incorreta'})
})

app.post('/personagens',async (request,response) => {
    // crianção de dados relacionados
    const {name,Class,atributted} = request.body;
    const user = await User.findOne({where:{username:request.query.user}});
    await Persons.create({name,class:Class,atributted,UserId: user.id});
    return response.status(200).json({messagem: 'Personagem criado com sucesso'})
});

app.get("/load-persons",async (request,response) => {
    // carregando dados relacionados
    const UserWithPersons = await User.findAll({
        include: {
            model: Persons
        }
    });
    return response.status(200).json(UserWithPersons);
});

app.get('/delete',async (request,response) => {
    const id = request.query.id;
    if (!id) {
        return response.status(400).send(`Id invalido`)
    }
    const UsersPersons = await User.findAll({
        where: {id:id},
        include: {model:Persons}
    })
    let html = ``;
    for (let persons of UsersPersons[0].Persons) {
        html += `
            <div>
            <span>${persons.name}</span> - ${persons.atributted}
                <a href="/delete-persons?id=${persons.id}">
                    <button>
                        excluir
                    </button>
                </a>
            </div>
        `
    }
    return response.send(html);
})

app.get('/delete-persons',async (request,response) => {
    const id = request.query.id;
    if(!id) return response.status(400).json('Id invalido')
    const transaction = await db.transaction();
    try {
        await Persons.destroy({where:{id}})
        await transaction.commit();
        return response.json('sucesso')
    }
    catch (e) {console.log(e)}
});

const PORT = 8080;

app.listen(PORT, () => console.log(`Server Running ${PORT}`));