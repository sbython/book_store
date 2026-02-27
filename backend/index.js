import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import booksRoute from './routes/booksRoute.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/books', booksRoute);

const PORT = process.env.PORT || 5555;
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/books-collection';

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
