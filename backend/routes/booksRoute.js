import express from 'express';
import Book from '../models/bookModel.js';

const router = express.Router();

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({ count: books.length, data: books });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// GET one book
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// POST create book
router.post('/', async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear) {
      return res.status(400).json({ message: 'title, author, and publishYear are required' });
    }
    const book = await Book.create({ title, author, publishYear });
    return res.status(201).json(book);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// PUT update book
router.put('/:id', async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear) {
      return res.status(400).json({ message: 'title, author, and publishYear are required' });
    }
    const book = await Book.findByIdAndUpdate(req.params.id, { title, author, publishYear }, { new: true });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// DELETE book
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

export default router;
