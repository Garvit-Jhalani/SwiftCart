// const Product = require("../models/Product");
// const User = require("../models/User");
// const redisClient = require("./redisClient");

// const RECOMMENDATION_EXPIRY = 3600; // 1 hour

// exports.generateRecommendations = async (userId) => {
//   // Check if recommendations are cached
//   const cachedRecommendations = await redisClient.get(
//     `recommendations:${userId}`
//   );
//   if (cachedRecommendations) {
//     return JSON.parse(cachedRecommendations);
//   }

//   // Example logic: get user's browsing and purchase history
//   const user = await User.findById(userId)
//     .populate("browsingHistory.productId")
//     .populate("purchaseHistory.productId");

//   // Analyze data and generate recommendations (placeholder logic)
//   const recommendedProducts = user.browsingHistory.map(
//     (history) => history.productId
//   );

//   // Remove duplicates
//   const uniqueRecommendations = [...new Set(recommendedProducts)];

//   // Cache the recommendations
//   await redisClient.set(
//     `recommendations:${userId}`,
//     JSON.stringify(uniqueRecommendations),
//     "EX",
//     RECOMMENDATION_EXPIRY
//   );

//   return uniqueRecommendations;
// };
const tf = require("@tensorflow/tfjs"); // Import TensorFlow.js

// Example function to train a model
async function trainModel(trainingData) {
  // Define and compile your TensorFlow.js model
  const model = tf.sequential();
  model.add(
    tf.layers.dense({
      units: 128,
      activation: "relu",
      inputShape: [trainingData.inputShape],
    })
  );
  model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }));
  model.compile({
    optimizer: "adam",
    loss: "binaryCrossentropy",
    metrics: ["accuracy"],
  });

  // Train the model with the provided data
  await model.fit(trainingData.inputs, trainingData.labels, { epochs: 10 });

  return model;
}

// Example function to make predictions
async function predictRecommendations(model, userData) {
  // Make predictions using the trained model
  const predictions = model.predict(userData);
  return predictions;
}

module.exports = { trainModel, predictRecommendations };
