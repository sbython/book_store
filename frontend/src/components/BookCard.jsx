import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ book, onClick }) => {
  return (
    <div 
      className="card card-dynamic-bg" 
      onClick={() => onClick(book)} 
      style={{ backgroundImage: book.image ? `url('${book.image}')` : 'none' }}
    >
      <div className="card-content card-content-overlay">
        <div className="book-title">{book.title}</div>
        <div className="book-author">By {book.author} | {book.publishYear}</div>
        <div className="book-desc">
          {book.description || 'No description provided.'}
        </div>
        <div className="book-price">${book.price}</div>
      </div>
      <div className="card-overlay">
         <span>Click for Actions</span>
      </div>
    </div>
  );
};

export default BookCard;
