const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const User = require('../models/User');

// GET toutes les notes de l'utilisateur
router.get('/:userId', async (req, res) => {
  try {
    const notes = await Note.find({ user: req.params.userId });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST créer une nouvelle note
router.post('/', async (req, res) => {
  const { userId, content } = req.body;
  const newNote = new Note({
    user: userId,
    content: content
  });
  
  try {
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
