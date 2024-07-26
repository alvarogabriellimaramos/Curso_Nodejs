const express = require("express");
const db = require("./data/db");
const User = require('./models/User');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async function (request, response) {
    const Users = await User.findAll();
    let html = ``
    for (let user of Users) {
        html += `
        <div style="display:flex; gap:10px;">
            <span>${user.username}</span>
             <form action="/remove?id=${user.id}" method="POST">
                <button style="margin-top:10px;">
                    delete
                </button>
            </form>
        <button>
            <a href="/edit?id=${user.id}">edit</a>
        </button>
        </div>
        `
    }
    return response.status(200).send(`<h1>Registra</h1> <div>
        
        <form action="/register" method="POST">
            <input type="text" name="username">
            <button>registrar</button>
        </form> ${html}
    </div>`)
});

app.get("/edit",async function (request,response) {
    const id = request.query.id;
    const user = await User.findOne({raw:true,where:{id:id}})
    const ParseUser = JSON.parse(user.username)
    let html = `
        <div>
            <form action='/edit?id=${user.id}' method="POST" >
                <input type='text' name="newname" value="${ParseUser}">
                <input type="number" name="year">
                <button>edit</button>
            </form> 
            </div>
    `
    return response.status(200).send(html);
})

app.get('/user', async function (request, response) {
    const id = request.query.id;
    const user = await User.findOne({ raw: true, where: { id: id } });
    console.log(user)
    if (!user) return response.status(404).json({ messagem: 'Usuario não encontrado' });
    return response.status(200).send(`<h1>${user.username}</h1>`)
})
app.get("/force",async (request,response) => {
    await User.sync({force:true})
    return response.redirect('/')
})
app.post('/register', async function (request, response) {
    const { username } = request.body;
    const str = JSON.stringify(username);

    if (!username) return response.status(400).json({ messagem: 'Nome de usuario inválido' });
    await User.create({ username: JSON.stringify(username) });
    return response.status(200).redirect('/');
});

app.post('/remove', async function (request, response) {
    const id = request.query.id;
    if (!id) return response.status(400).json({ messagem: 'Id invalído' });
    await User.destroy({ where: { id: id } });
    return response.status(200).redirect('/');
});
app.post('/edit',async (request,response) => {
    const id = request.query.id;
    const {newname,year} = request.body
    if(!id) return response.json({messagem: 'Id invalído'});
    const stringify = JSON.stringify(newname)
    const user = await User.update({username:stringify},{where: {id}})
    return response.redirect('/');
});




app.listen(8080, async () => {
    await db.sync()
    console.log('Server Running ' + 8080)
})