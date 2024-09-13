const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController');

router.get('/exam', examController.getExamQuestions);

module.exports = router;
