import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import booksRoute from './routes/booksRoute.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Basic Route for testing
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the MERN Book Store API!');
});

// Use Book routes
app.use('/books', booksRoute);

const PORT = 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongodb:27017/bookstore';

// Database connection & server start
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to database:', error);
  });
