// sets up the router
const router = require("express").Router();
// sets up the classes from the controller
const {
  getAllUsers,
  createUser,
  getUserById,
  addFriend,
  updateUser,
  deleteUser,
  deleteFriend,
} = require("../../controllers/user-controller");

// GET/get all users = /api/users
// PUT/create user = /api/users
// {
//   "username": "kai",
//   "email": "kai@kai.com"
// }
router.route("/").get(getAllUsers).post(createUser);

// GET/get user by user id = /api/users/:id
// PUT/update user by user id = /api/users/:id
// {
//   "username": "kaiupdated",
//   "email": "kaiupdated@kai.com"
// }
// DEL/delete user by user id = /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// POST/add a friend = /api/users/:userId/friends/:friendsId
// DEL/delete a friend = /api/uisers/:userId/friends/:friendsId
router.route("/:id/friends/:friendsId").post(addFriend).delete(deleteFriend);

// exports the router module
module.exports = router;