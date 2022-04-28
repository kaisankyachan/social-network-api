// sets up the router
const router = require("express").Router();
// sets up the classes from the controller
const {
  getAllThoughts,
  addReaction,
  getThoughtById,
  createThought,
  deleteReaction,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

// GET/get all thoughts = /api/thoughts
// POST/create thought = /api/thoughts
// {
//   "thoughtText": "Here's a cool thought... well - I got nothing.",
//   "username": "kaiupdated",
//   "userId": "626222c5cd8494124de5f53b"
// }
router.route("/").get(getAllThoughts).post(createThought);

// GET/get thought by thought id,
// PUT/update thought by thought id = /api/thoughts
// {
//   "thoughtText": "I updated the first thought.",
//   "username": "kaiupdated",
//   "userId": "626222c5cd8494124de5f53b"
// }
// DEL/delete thought by thought id = /api/thoughts/:thoughtID
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

// POST/create reaction if you include a JSON body you can add a reaction text along with a username = /api/thoughts/:thoughtId/reactions
// {
// 	"reactionBody": "this is a reaction we will delete",
// 	"username": "deletemeplease"
// }
router.route('/:thoughtId/reactions').post(addReaction);

// DEL/delete a reaction by thought ID and reaction ID = /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// exports the router module
module.exports = router;
