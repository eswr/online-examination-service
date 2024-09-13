const examService = require('../services/examService');

exports.getExamQuestions = async (req, res) => {
  try {
    const questions = await examService.getExamQuestions();
    res.status(200).json({ questions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
