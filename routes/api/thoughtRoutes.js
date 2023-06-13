const router = require('express').Router();

const { getThoughts, getSingleThought, createThought, addReaction, updateThough, deleteThought, deleteReaction } = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId/reactions');
// router.route('/:thoughtId').put(updateThough).get(getSingleThought).delete(deleteThought)
// router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;