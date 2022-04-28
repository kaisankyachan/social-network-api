// sets up the router
const router = require("express").Router();
// sets up userRoutes
const userRoutes = require("./user-routes");
// sets up thoughtRoutes
const thoughtRoutes = require("./thought-routes");
// use the user route
router.use("/users", userRoutes);
// use the thought route
router.use("/thoughts", thoughtRoutes);
// exports the router class
module.exports = router;
