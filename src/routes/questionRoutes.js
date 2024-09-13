const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.post(
  '/question',
  questionController.uploadImage,
  questionController.createDescriptiveQuestionWithImage
);

module.exports = router;
