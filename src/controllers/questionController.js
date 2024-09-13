const questionService = require('../services/questionService');

exports.createQuestion = async (req, res) => {
  try {
    const { type, questionText, answer, image } = req.body;

    if (!questionText || questionText.trim() === '') {
      return res.status(400).json({ error: 'Validation error: "questionText" field is required and cannot be empty.' });
    }

    const question = await questionService.createQuestion({ type, questionText, answer, image });
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
