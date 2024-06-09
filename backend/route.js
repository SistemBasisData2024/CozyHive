const userCont = require ("./controller/userCont.js");
const kostController = require("./controller/kostCont.js");
const express = require ("express");

const router = express.Router();

router.post("/login", userCont.login);
router.post("/signUp", userCont.signUp);

router.post("/kost/addkost", kostController.addKost);
router.put("/profile/mykost/editkost/:id", kostController.editKost);
router.post("/getAllKost", kostController.getAllKost);

router.post("/addReview", kostController.addReview);
router.get("/getAllReviews", kostController.getAllReviews);
router.post("/addBooking", kostController.addBooking);
router.get("/getAllBookings", kostController.getAllBookings);

module.exports = router;