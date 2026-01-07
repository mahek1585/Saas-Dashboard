const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/register", authController.register);

const verifyToken = require("../middleware/authMiddleware");

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "You are authorized!", user: req.user });
});


module.exports = router;
