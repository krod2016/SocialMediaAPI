const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction,
    getThoughts,
    getThoughtById
} = require('../../controllers/thought-controller');

//api/thought/<userId>
router.route('/:userId').post(addThought);

//api/thought/<thoughtId>
router.route('/:id').get(getThoughtById)

//api/thought
router.route('/').get(getThoughts)

//api/thought/<userId>/<thoughtId>
router.route('/:userId/:thoughtId')
.put(addReaction);

//api/thought/<thoughtId>
router.route('/:thoughtId')
.delete(removeThought)

//api/thought/<thoughtId>
router.route('/:userId/:thoughtId')
.post(addReaction);

//api/thought/<thoughtId>
router.route('/:userId/:thoughtId/:reactionId')
.delete(removeReaction);

module.exports = router;