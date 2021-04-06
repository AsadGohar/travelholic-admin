const express = require ('express');
const router = express.Router();

// const {auth} = require('../middleware/auth')

const QuestionControllers = require('../Controllers/QuestionControllers')

router.post('/', QuestionControllers.createQuestion)
router.get('/', QuestionControllers.getQuestions)
router.get('/question/:id', QuestionControllers.getQuestionbyId)
router.get('/admin', QuestionControllers.getQuestionsAdmin)
router.get('/topic/:name', QuestionControllers.getQuestionsByTopic)
router.get('/most-viewed', QuestionControllers.getMostViewedQuestions)
router.put('/:id', QuestionControllers.updateQuestionbyId)
router.put('/view/:id', QuestionControllers.addViewToQuestionbyId)
router.delete('/:id', QuestionControllers.deleteQuestionbyId)

module.exports = router


