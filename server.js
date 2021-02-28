// Dependencies
const express = require('express');

// Set PORT
const PORT = process.env.PORT || 3000;

// Establish path to database.
const dbJson = require('./db/db.json');

// Set up express app
const app = express();

// Access public files
app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// Require Routes.js files to communicate when to generate api routes or html files
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start server and begin listening
app.listen(PORT, () => {
    console.log("App is listening on PORT: " + PORT);
});