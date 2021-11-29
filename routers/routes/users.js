const express = require("express");

const { signup, login } = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/sginup", signup);
usersRouter.post("/login", login);

module.exports = usersRouter;
