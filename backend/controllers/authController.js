const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Dummy check
  if (email === "demo@gmail.com" && password === "123456") {
    // JWT token generate
    const token = jwt.sign(
      { email }, 
      process.env.JWT_SECRET, 
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    return res.json({
      token,
      user: { name: "Demo User", email }
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
};
