const express = require('express');
const path = require("path");

const app = express();

const PORT = 8080; 


function Random () {
    const numbers = [1,2,3,4,5,6,7,8,9,0];
    let num = ''
    for (let c of numbers) {
        num += Math.floor(Math.random() * (c + numbers.length));
    }
    return num
}
const randomNumber = Random();
const checkToken = function (request,response,next) {
    const {token} = request.body;
    if (token === randomNumber) {
        next();
        return;
    }
    return response.json({messagem: 'Token Invalido'});
}
console.log(randomNumber);
const Home = function(request,response) {
    return response.send('Sucesso')
};
app.use(express.urlencoded({extended:true}));
app.use('/token',checkToken,Home);

app.get('/',(request,response) => {
    const base = path.join(__dirname,'form.html');
    return response.sendFile(base);
});
app.listen(PORT , () => console.log(`Server Running ${PORT}`));