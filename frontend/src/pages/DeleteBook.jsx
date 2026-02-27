import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const API = 'http://localhost:5555/api/books';

export default function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios
      .get(`${API}/${id}`)
      .then((res) => setTitle(res.data.title))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/${id}`)
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Delete Book</h1>
      <p>Are you sure you want to delete <strong>{title}</strong>?</p>
      <button onClick={handleDelete}>Yes, Delete</button>{' '}
      <button onClick={() => navigate('/')}>Cancel</button>
    </div>
  );
}
