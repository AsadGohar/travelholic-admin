const express = require ('express');
const router = express.Router();

const QuestionControllers = require('../Controllers/QuestionControllers')

router.post('/', QuestionControllers.createQuestion)
router.get('/', QuestionControllers.getQuestions)
router.get('/admin', QuestionControllers.getQuestionsAdmin)
router.put('/:id', QuestionControllers.updateQuestionbyId)
router.delete('/:id', QuestionControllers.deleteQuestionbyId)

module.exports = router


