const express = require("express");

const app = express();

function InformationHttp (request,response,next) {
    console.log(request.method);
    console.log(new Date().toISOString())
    console.log(request.url);
    next();
};
app.use(InformationHttp);
app.get('/',(request,response) => response.send("Ola"))
app.listen(8080,() => console.log('Server Running 8080'));