const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .put(addFriend)
  .delete(deleteUser);

module.exports = router;
