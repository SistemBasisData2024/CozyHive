const userCont = require ("./controller/userCont.js");
const express = require ("express");
const router = express.Router();

router.post("/login", userCont.login);
router.post("/signUp", userCont.signUp);

module.exports = router;
