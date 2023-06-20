const User = require("../Models/userModel");
const logger = require("../logger/logger");

// Register user
module.exports.registerUser = async (req, res) => {
  try {
    // Create a new user with the provided name, email, and password
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // Return a success response for user registration
    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
    });

    // Log the success message
    logger.userLogger.log("info", "User Registered Successfully");
  } catch (error) {
    // Return an error response if there's an error while registering the user
    res.status(500).json({
      success: false,
      message: "Error while registering the user",
    });

    // Log the error message
    logger.userLogger.log("error", "Error while registering the user");
  }
};

// Login User
exports.loginUser = async (req, res) => {
  // Return a success response for user login
  return res.status(200).json({
    success: true,
    message: "User Logged In Successfully",
  });
};
