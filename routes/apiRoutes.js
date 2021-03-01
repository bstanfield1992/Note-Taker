const fs = require("fs");
let notes = require("../db/db.json");

// applies an id.
const { v4: uuidv4 } = require("uuid");

module.exports = function (app) {
  // connected the JSON API
  app.get("/api/notes", (req, res) => {
    console.log(notes);
    res.json(notes);
  });

  // Looking for the ID of the selected Note to re-display after it's saved.
  app.get("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    let found;
    notes.forEach((note) => {
      // will only pull notes that have id's
      if (id == note.id) {
        found = note;
        res.json(note);
      }
    });
    res.json(false);
  });

  // after you save the note it posts notes to the list and applies id to it.
  app.post("/api/notes", (req, res) => {
    // For a newNote to be saved it must have a completed body
    const newNote = req.body;
    // Assigning each newNote an ID using UUID
    newNote.id = uuidv4();

    //pushes newNote to notes array.
    notes.push(newNote);
    // jsonNotes = JSON stringified notes/proper json format.
    let jsonNotes = JSON.stringify(notes);

    fs.writeFile(
      "./db/db.json",
      jsonNotes,
      function (err) {
        if (err) {
          console.log(err);
        }
        console.log("Note saved to database.");
      }
    );
    res.json(true);
  });

  // function created to delete the saved notes in the JSON db.
  app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    notes = notes.filter((note) => note.id != id);

    let jsonNotes = JSON.stringify(notes);

    fs.writeFile(
      "./db/db.json",
      jsonNotes,
      function (err) {
        if (err) {
          console.log(err);
        }
        console.log("The Note selected has been deleted.");
      }
    );
    res.json(true);
  });
};
