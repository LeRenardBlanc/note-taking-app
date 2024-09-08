const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET les abréviations d'un utilisateur
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user.abbreviations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST créer une nouvelle abréviation
router.post('/:userId', async (req, res) => {
  const { abbr, full } = req.body;

  try {
    const user = await User.findById(req.params.userId);
    user.abbreviations.push({ abbr, full });
    await user.save();
    res.status(201).json(user.abbreviations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
