const express = require("express");

const authController = require("../controllers/auth-controller");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/card", authController.card);
router.post("/createRoom", authController.createRoom);

module.exports = router;
