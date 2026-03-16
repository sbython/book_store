import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import AddBookModal from '../components/AddBookModal';
import EditBookModal from '../components/EditBookModal';
import DeleteBookModal from '../components/DeleteBookModal';
import ActionsModal from '../components/ActionsModal';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isActionsModalOpen, setIsActionsModalOpen] = useState(false);

  // Selected book for edit/delete
  const [selectedBook, setSelectedBook] = useState(null);

  // Form states
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publishYear: '',
    price: '',
    description: '',
    image: '',
  });

  const [formError, setFormError] = useState('');

  const fetchBooks = () => {
    setLoading(true);
    axios
      .get('http://localhost:5000/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({ title: '', author: '', publishYear: '', price: '', description: '', image: '' });
    setFormError('');
    setSelectedBook(null);
  };

  const handleOpenAdd = () => {
    resetForm();
    setIsAddModalOpen(true);
  };

  const handleCardClick = (book) => {
    setSelectedBook(book);
    setIsActionsModalOpen(true);
  };

  const handleOpenEdit = (book) => {
    setFormData({
      title: book.title,
      author: book.author,
      publishYear: book.publishYear,
      price: book.price,
      description: book.description || '',
      image: book.image || '',
    });
    setIsEditModalOpen(true);
  };

  const handleOpenDelete = (book) => {
    setIsDeleteModalOpen(true);
  };

  const handleSaveAdd = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.publishYear || !formData.price) {
      setFormError('Title, Author, Publish Year, and Price are required.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/books', formData);
      setIsAddModalOpen(false);
      fetchBooks();
    } catch (error) {
      setFormError('Error adding book. Please try again.');
    }
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.publishYear || !formData.price) {
      setFormError('Title, Author, Publish Year, and Price are required.');
      return;
    }
    try {
      await axios.put(`http://localhost:5000/books/${selectedBook._id}`, formData);
      setIsEditModalOpen(false);
      fetchBooks();
    } catch (error) {
      setFormError('Error updating book. Please try again.');
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/books/${selectedBook._id}`);
      setIsDeleteModalOpen(false);
      fetchBooks();
    } catch (error) {
      alert('Error deleting book');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">MERN Book Store</h1>
        <button className="add-btn" onClick={handleOpenAdd}>
          + Add New Book
        </button>
      </div>

      {loading ? (
        <p className="loading-msg">Loading books...</p>
      ) : (
        <div className="grid">
          {books.map((book) => (
            <BookCard 
              key={book._id} 
              book={book} 
              onClick={handleCardClick} 
            />
          ))}
          {books.length === 0 && (
             <h2 className="empty-msg">No books found. Please add some!</h2>
          )}
        </div>
      )}

      {/* Modals */}
      <AddBookModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSave={handleSaveAdd} 
        formData={formData} 
        handleInputChange={handleInputChange} 
        formError={formError} 
      />

      <ActionsModal 
        isOpen={isActionsModalOpen} 
        onClose={() => setIsActionsModalOpen(false)} 
        book={selectedBook} 
        onEdit={handleOpenEdit} 
        onDelete={handleOpenDelete} 
      />

      <EditBookModal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        onSave={handleSaveEdit} 
        formData={formData} 
        handleInputChange={handleInputChange} 
        formError={formError} 
      />

      <DeleteBookModal 
        isOpen={isDeleteModalOpen} 
        onClose={() => setIsDeleteModalOpen(false)} 
        onConfirm={handleConfirmDelete} 
        bookTitle={selectedBook?.title} 
      />
    </div>
  );
};

export default Home;
