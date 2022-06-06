const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller')

// get all routes
// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser)

// single routes
// /api/users/<id>
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)

module.exports = router;