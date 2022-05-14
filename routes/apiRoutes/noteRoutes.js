const router = require('express').Router();
const notes = require('../../db/notes');
const { createNewNote } = require('../../lib/notes');


router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        res.json(results);
    }
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const newNote = createNewNote(req.body, notes);

    res.json(newNote);
});

module.exports = router;