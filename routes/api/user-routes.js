const router = require('express').Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller')

// get all routes
// /api/users
router.route('/')
  .get(getAllUsers)
  .post(createUser)

// single routes
// /api/users/<userId>
router.route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)

// /api/users/<userId>/friends/<friendId>
router.route('/:userId/friends/:friendId')
  .put(addFriend)
  .delete(removeFriend)

module.exports = router;