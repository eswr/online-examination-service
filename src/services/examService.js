const sequelize = require('../config/database');
const Question = require('../models/Question');

exports.getExamQuestions = async () => {
  try {
    return await Question.findAll({
      order: sequelize.random(), //sequelize.literal('RAND()')
      limit: 10,
    });
  } catch (error) {
    throw new Error('Error fetching exam questions: ' + error.message);
  }
};
