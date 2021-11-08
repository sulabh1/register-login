//requiring third party libraries
const express = require("express");

//custom module
const { register, login } = require("../controllers/authController");

//configuring router
const router = express.Router();

//register route
router.post("/register", register);

//login route
router.post("/login", login);

//exporting the router method
module.exports = router;
