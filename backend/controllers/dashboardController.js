exports.getDashboardData = (req, res) => {
  res.json({
    stats: {
      totalUsers: 1300,
      activeUsers: 865,
      revenue: 5300,
      subscriptions: 350,
    },
    userGrowth: [120, 190, 300, 250, 220, 400],
    revenueTrend: [1200, 2100, 1800, 2600, 3200, 5000],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  });
};
