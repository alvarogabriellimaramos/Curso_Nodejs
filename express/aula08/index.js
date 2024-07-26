const express = require('express');
const app = express();
const path = require('path');

const public = path.join(__dirname,'public');

app.use(express.static(public));

const basePath = path.join(__dirname,'/view/index.html')

app.get('/',(request,response) => {
    return response.sendFile(public);
})

app.listen(8080,() => console.log(`Server Running 8080`));