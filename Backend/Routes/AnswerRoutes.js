const express = require ('express');
const router = express.Router();

const AnswerControllers = require('../Controllers/AnswerControllers')

router.post('/', AnswerControllers.createAnswer)
router.get('/', AnswerControllers.getAnswers)
router.get('/reported', AnswerControllers.getAllReportedAnswers)
router.delete('/:id',AnswerControllers.deleteAnswerbyId )
router.put('/:id', AnswerControllers.updateAnswerbyId)

module.exports = router;
