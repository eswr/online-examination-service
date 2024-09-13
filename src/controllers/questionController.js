const questionService = require('../services/questionService');

exports.createQuestion = async (req, res) => {
  try {
    const question = await questionService.createQuestion(req.body);
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
