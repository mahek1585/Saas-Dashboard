require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");

// Middleware
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

app.use("/api/dashboard", dashboardRoutes);


// Test route
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
