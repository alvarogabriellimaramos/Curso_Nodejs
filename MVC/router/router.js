const router = require('express').Router();
const controller = require("../controller/index");

router.get('/create/task',controller.CreateTask);