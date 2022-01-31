const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction,
    getAllThoughts,
    getThoughtById,
} = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

router.route('/:id').get(getThoughtById)

router.route('/').get(getAllThoughts)

router.route('/:userId/:thoughtId').put(addReaction);

router.route('/:thoughtId').delete(removeThought)

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;