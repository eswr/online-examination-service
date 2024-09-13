const { uploadToS3 } = require('../utils/s3Upload');
const questionService = require('../services/questionService');

const multer = require('multer');
const upload = multer();

exports.uploadImage = upload.single('image');

exports.createDescriptiveQuestionWithImage = async (req, res) => {
  try {
    const { type, questionText, answer } = req.body;

    if (!questionText || questionText.trim() === '') {
      return res.status(400).json({ error: 'Validation error: "questionText" field is required and cannot be empty.' });
    }

    let imageUrl = null;
    if (req.file) {
      imageUrl = await uploadToS3(req.file);
    }

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
