// Dependencies
const express = require('express');

// Set PORT
const PORT = process.env.PORT || 3000;

// Set up express app
const app = express();

// Access public files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// Require Routes.js files to communicate when to generate api routes or html files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start server and begin listening
app.listen(PORT, () => {
    console.log("App is listening on PORT: " + PORT);
});