const express = require("express");
const { signupUser } = require("../controllers/userController");
const router = express.Router();

// rota POST /api/users
router.post("/", signupUser);

module.exports = router;
