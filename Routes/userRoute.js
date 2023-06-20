const express = require('express');

const router = express.Router();

const userController = require("../Controllers/user_controller");

router.post('/register',userController.registerUser);


module.exports = router;