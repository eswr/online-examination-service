const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.post('/question', questionController.createQuestion);

module.exports = router;
