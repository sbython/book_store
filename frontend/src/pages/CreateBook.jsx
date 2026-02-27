import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = 'http://localhost:5555/api/books';

export default function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(API, { title, author, publishYear: Number(publishYear) })
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Create Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Author: </label>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div>
          <label>Publish Year: </label>
          <input type="number" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} required />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Save</button>
      </form>
    </div>
  );
}
