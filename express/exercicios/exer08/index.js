const express = require('express');
const path = require('path');

const public = path.join(__dirname,'public');
const app = express();

app.use(express.static(public));

app.get('/',(request,response) => {
    return response.sendFile(`${public}/view/index.html`);
});

app.listen(8080,() => console.log(`server running 8080`));