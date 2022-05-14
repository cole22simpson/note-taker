const fs = require("fs");
  
  function createNewNote(body, noteData) {
    const note = body;
    noteData.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notes: noteData }, null, 2)
    );
    
    return note;
  }

  module.exports = {
    createNewNote
  };