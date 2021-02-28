const fs = require("fs");

// API routing
module.exports = (app) => {
    // GET /api/notes => read the database file and return all saved notes as JSON
    let noteList = JSON.parse(fs.readFileSync('../db/db.json', 'utf8'));

    app.get("/api/notes", (req, res) => {
        return res.json(noteList);
    });

    // POST /api/notes => receive a new note to save on the request body, add it to the database file, then return the new note to the client
    app.post('/api/notes', (req, res) => {
        // get the id of the last note if it exists
        let lastId;
        if(noteList.length) {
            lastId = Math.max(...(noteList.map(note => note.id)));
        // if it doesn't exist set it to zero
        } else {
            lastId = 0;
        }
    })
}