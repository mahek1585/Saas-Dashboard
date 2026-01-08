// controllers/subscriptionController.js

exports.getSubscription = (req, res) => {
  res.json([
    {
      name: "Free",
      price: 0,
      features: ["Basic Dashboard", "Limited Reports", "Email Support"],
    },
    {
      name: "Pro",
      price: 20,
      features: ["Full Dashboard", "Unlimited Reports", "Priority Email Support", "Custom Analytics"],
    },
    {
      name: "Premium",
      price: 50,
      features: ["All Pro Features", "Dedicated Account Manager", "Advanced Analytics", "24/7 Support"],
    }
  ]);
};

exports.upgradeSubscription = (req, res) => {
  const { plan } = req.body;
  res.json({
    message: `Subscription upgraded successfully to ${plan} plan`,
    plan,
  });
};
