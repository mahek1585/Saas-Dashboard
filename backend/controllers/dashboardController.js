// exports.getDashboardData = (req, res) => {
//   res.json({
//     stats: {
//       totalUsers: 1300,
//       activeUsers: 865,
//       revenue: 5300,
//       subscriptions: 350,
//     },
//     userGrowth: [120, 190, 300, 250, 220, 400],
//     revenueTrend: [1200, 2100, 1800, 2600, 3200, 5000],
//     months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   });
// };

const User = require("../models/User");
const Subscription = require("../models/Subscription");

exports.getDashboardData = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ isActive: true }); // agar isActive flag ho
    const subscriptions = await Subscription.countDocuments();
    const revenue = await Subscription.aggregate([
      { $group: { _id: null, total: { $sum: "$price" } } }
    ]);

    // dummy arrays for chart
    const userGrowth = [120, 190, 300, 250, 220, 400]; // later can calculate from DB
    const revenueTrend = [1200, 2100, 1800, 2600, 3200, 5000];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

    res.json({
      stats: {
        totalUsers,
        activeUsers,
        revenue: revenue[0]?.total || 0,
        subscriptions,
      },
      userGrowth,
      revenueTrend,
      months,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
