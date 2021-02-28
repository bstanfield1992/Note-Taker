var path = require("path");

//HTML Route
module.exports = (app) => {
    // GET notes html file
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // GET "*" index html file
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};