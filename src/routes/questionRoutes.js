const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController'); // Ensure correct import

// Route to create a descriptive question with image upload
router.post(
  '/question',
  questionController.uploadImage, // Middleware to handle image upload
  questionController.createDescriptiveQuestionWithImage // Controller function to handle the request
);

module.exports = router;
