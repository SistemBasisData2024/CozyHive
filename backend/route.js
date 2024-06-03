const userCont = require ("./controller/userCont.js");
const kostController = require("./controller/kostCont.js");
const express = require ("express");
const router = express.Router();

router.post("/login", userCont.login);
router.post("/signUp", userCont.signUp);

router.post("/kost/addkost", kostController.addKost);
router.put("/profile/mykost/editkost/:id", kostController.editKost);
router.get("/getAllKost",kostController.getAllKost);

module.exports = router;