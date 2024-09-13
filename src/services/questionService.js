const Question = require('../models/Question');

exports.createQuestion = async (questionData) => {
  return await Question.create(questionData);
};
