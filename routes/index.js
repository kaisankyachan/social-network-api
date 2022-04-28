// sets up express and enables routes
const router = require("express").Router();
// informs where the routes are located
const apiRoutes = require("./api");
// sets up the routes for use
router.use("/api", apiRoutes);
// checks for a 404 error and returns a message to the user indicating that they have really messed up
router.use((req, res) => {
  res.status(404).send("<h2>This is totally embarrassing, but you've encountered a 404 error that I don't know if you will ever be able to overcome. </h2>");
});
// exports the router module
module.exports = router;
