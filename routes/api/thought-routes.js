const router = require('express').Router()

const {
  getThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller')

// /api/thoughts
router.route('/')
  .get(getThought)

// /api/thought/<userId>
router.route('/:userId')
  .post(createThought)  

// /api/thoughts/<thoughtId>
router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought)

// /api/thoughts/<thoughtId>/reactions
router.route('/:thoughtId/reactions')
  .post(addReaction)

// /api/thoughts/<thoughtId>/reactions/<reactionId>
router.route('/thoughtId/reaction/:reactionId')
  .delete(removeReaction)

module.exports = router