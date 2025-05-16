import express from 'express';
import Verse from '../models/Verse.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const verses = await Verse.find().sort({ createdAt: -1 });
  res.json(verses);
});

router.post('/', async (req, res) => {
  const { text } = req.body;
  const newVerse = new Verse({ text });
  await newVerse.save();
  res.status(201).json(newVerse);
});

export default router;
