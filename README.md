# Book Store — MERN Stack

A simple bookstore application built with the **MERN** stack (MongoDB, Express, React, Node.js).

## Features

- List all books
- View book details
- Create a new book
- Edit an existing book
- Delete a book

## Project Structure

```
book_store/
├── backend/          # Express + Mongoose REST API
│   ├── index.js
│   ├── models/
│   │   └── bookModel.js
│   ├── routes/
│   │   └── booksRoute.js
│   └── .env.example
└── frontend/         # React (Vite) app
    └── src/
        ├── App.jsx
        └── pages/
            ├── Home.jsx
            ├── CreateBook.jsx
            ├── ShowBook.jsx
            ├── EditBook.jsx
            └── DeleteBook.jsx
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Atlas URI

### Backend Setup

```bash
cd backend
cp .env.example .env        # edit MONGODB_URL as needed
npm install
npm run dev                 # starts on http://localhost:5555
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev                 # starts on http://localhost:5173
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Endpoints

| Method | Endpoint          | Description      |
|--------|-------------------|------------------|
| GET    | /api/books        | Get all books    |
| GET    | /api/books/:id    | Get one book     |
| POST   | /api/books        | Create a book    |
| PUT    | /api/books/:id    | Update a book    |
| DELETE | /api/books/:id    | Delete a book    |
