const express = require("express");
const path = require('path');

const app = express();

const port = 8080;

const basePath = path.join(__dirname,'views');

app.get('/html',(request,response) => {
    return response.sendFile(basePath + '/index.html')
})
app.listen(port,() => console.log(`Server Running ${port}`));
