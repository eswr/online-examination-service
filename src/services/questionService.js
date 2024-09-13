const Question = require('../models/Question');

exports.createQuestion = async (questionData) => {
  try {
    return await Question.create(questionData);
  } catch (error) {
    throw new Error('Failed to create question: ' + error.message);
  }
};
