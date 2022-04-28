// sets up mongoose database
const mongoose = require("mongoose");
// sets up express
const express = require("express");
// sets up the app within express
const app = express();
// sets up the port that we will use to access the api - if you don't use this port in the URL it won't work
const PORT = process.env.PORT || 8080;
// use JSON within express
app.use(express.json());
// use url encoding within express
app.use(express.urlencoded({ extended: true }));
// the app uses routes
app.use(require('./routes'));
// sets up the datab ase connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongo database log - informs mongoose to display debug information in the terminal when an api call is made
mongoose.set('debug', true);
// sets up a listener to inform us when the connection to the database is completed
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
