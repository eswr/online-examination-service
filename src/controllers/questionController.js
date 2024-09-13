const { uploadToS3 } = require('../utils/s3Upload'); // Import the custom upload function
const questionService = require('../services/questionService');

// Middleware to handle file upload using multer
const multer = require('multer');
const upload = multer(); // Use multer without storage to parse file uploads

// Middleware to handle image upload
exports.uploadImage = upload.single('image');

// Controller function to create a descriptive question with an image
exports.createDescriptiveQuestionWithImage = async (req, res) => {
  try {
    const { type, questionText, answer } = req.body;

    // Validate the questionText field
    if (!questionText || questionText.trim() === '') {
      return res.status(400).json({ error: 'Validation error: "questionText" field is required and cannot be empty.' });
    }

    // Upload image to S3 and get the URL
    let imageUrl = null;
    if (req.file) {
      imageUrl = await uploadToS3(req.file); // Use the custom upload function
    }

    // Create the question
    const question = await questionService.createQuestion({
      type,
      questionText,
      answer,
      image: imageUrl,
    });

    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: 'Error creating question: ' + error.message });
  }
};
