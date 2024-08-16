// In your recommendationController.js
exports.getRecommendations = async (req, res) => {
  const userId = req.user.sub;

  // Fetch user activities
  const activities = await UserActivity.find({ userId });

  // Use TensorFlow.js to generate recommendations based on user activities
  const recommendations = await generateRecommendations(activities);

  res.json(recommendations);
};
