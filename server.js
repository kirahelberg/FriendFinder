const path = require("path");
const express = require("express");
const app = express();

//Let the port be set by Heroku
const PORT = process.env.PORT || 3000;

//Parse requests as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import HTML Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//App listening on this port
app.listen(PORT, function() {
  console.log("Friend Finder listening on PORT " + PORT);
});
