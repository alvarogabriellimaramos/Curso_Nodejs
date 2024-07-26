const express = require("express");
const app = express();
const router = require('./routers/router');

app.use(router);

app.listen(8080,() => console.log('Server Running 8080'));