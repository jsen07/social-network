const router = require('express').Router();

const { getThoughts, getSingleThought, createThought, addReaction, updateThought, deleteThought, deleteReaction } = require('../../controllers/thoughtController');

//thought routing
router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId/reactions');
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)

//thought reaction routes
router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);



module.exports = router;