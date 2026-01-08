// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");

// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = process.env.PORT || 5000;

// const authRoutes = require("./routes/auth");
// const dashboardRoutes = require("./routes/dashboard");
// const subscriptionRoutes = require("./routes/subscriptionRoutes");

// mongoose.connect("mongodb://localhost:27017/saas_db")
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));
// // Middleware
// app.use(express.json());

// app.use(cors());
// app.use(bodyParser.json());

// app.use("/api/auth", authRoutes);

// app.use("/api/dashboard", dashboardRoutes);

// app.use("/api/subscription", subscriptionRoutes);


// // Test route
// app.get("/", (req, res) => {
//   res.send("Backend server is running!");
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const subscriptionRoutes = require("./routes/subscriptionRoutes");

  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch((err) => console.log("❌ MongoDB connection error:", err));
    
  app.use("/api/auth", authRoutes);
  app.use("/api/dashboard", dashboardRoutes);
  app.use("/api/subscription", subscriptionRoutes);


// Test route
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});