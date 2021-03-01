var path = require("path");

module.exports = (app) => {
  
  // gets notes.html
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  })

  // gets index.html file
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  })
}