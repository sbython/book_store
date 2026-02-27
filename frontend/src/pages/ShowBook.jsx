import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const API = 'http://localhost:5555/api/books';

export default function ShowBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!book) return <p style={{ padding: '1rem' }}>Loading...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Book Details</h1>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Publish Year:</strong> {book.publishYear}</p>
      <p><strong>Created At:</strong> {new Date(book.createdAt).toLocaleDateString()}</p>
      <Link to="/">← Back to list</Link>
    </div>
  );
}
