const express = require("express");
const router = express.Router();
const { createUser, login, getUser } = require("../controllers/users");

router.post("/create", createUser);
router.post("/login", login);
router.get("/users", getUser);

module.exports = router;
