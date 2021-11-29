const express = require("express");

const { createRole, getRoles } = require("../controllers/roles");

const rolesRouter = express.Router();

rolesRouter.post("/createRole", createRole);
rolesRouter.get("/roles", getRoles);

module.exports = rolesRouter;
