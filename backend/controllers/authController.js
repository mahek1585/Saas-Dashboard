const jwt = require("jsonwebtoken");

// controllers/authController.js

// login function
exports.login = (req, res) => {
  const { email, password } = req.body;
  if (email === "demo@gmail.com" && password === "123456") {
    return res.json({
      token: "demo-token",
      user: { name: "Demo User", email },
    });
  }
  res.status(401).json({ message: "Invalid credentials" });
};

// register function
exports.register = (req, res) => {
  const { name, email, password } = req.body;
  return res.json({
    message: "User registered successfully",
    user: { name, email },
  });
};

