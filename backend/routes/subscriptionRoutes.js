// const express = require("express");
// const router = express.Router();
// const {
//   getSubscription,
//   upgradeSubscription
// } = require("../controllers/subscriptionController");

// // GET all plans
// router.get("/", getSubscription);

// // POST upgrade plan
// router.post("/upgrade", upgradeSubscription);

// module.exports = router;

// routes/subscriptionRoutes.js
const express = require("express");
const router = express.Router();
const { getSubscription, upgradeSubscription } = require("../controllers/subscriptionController");

// GET all plans
router.get("/", getSubscription);

// POST upgrade plan
router.post("/upgrade", upgradeSubscription);

module.exports = router;
