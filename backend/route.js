const userCont = require ("./controller/userCont.js");
const kostController = require("./controller/kostCont.js");
const express = require ("express");
const router = express.Router();

router.post("/login", userCont.login);
router.post("/signUp", userCont.signUp);
// Route for adding a new kost
router.post("/kost/addkost", kostController.addKost);

// Route for editing an existing kost
router.put("/profile/mykost/editkost/:id", kostController.editKost);

router.post("/kost/addkost", kostController.addKost);
router.put("/profile/mykost/editkost/:id", kostController.editKost);
router.get("/getAllKost",kostController.getAllKost);

module.exports = router;