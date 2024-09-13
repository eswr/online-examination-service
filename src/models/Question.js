const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Question = sequelize.define('Question', {
  type: {
    type: DataTypes.ENUM('MCQ', 'DESCRIPTIVE'),
    allowNull: false,
  },
  questionText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  options: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'Questions',
});

module.exports = Question;
