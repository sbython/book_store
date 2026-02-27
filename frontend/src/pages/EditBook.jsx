import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const API = 'http://localhost:5555/api/books';

export default function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');

  useEffect(() => {
    axios
      .get(`${API}/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/${id}`, { title, author, publishYear: Number(publishYear) })
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Edit Book</h1>
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
        <button type="submit" style={{ marginTop: '1rem' }}>Update</button>
      </form>
    </div>
  );
}
