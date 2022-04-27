const router = require('express').Router();
const { notes } = require('../../db/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = saveNote(req.query, results);
    }
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!saveNote(req.body)) {
        res.status(400).send('The note is incomplete.');
    }
    else {
        const note = saveNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;