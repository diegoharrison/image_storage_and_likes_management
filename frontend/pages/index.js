import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageList from '../components/ImageList';
import jwt from 'jsonwebtoken';

// Geração do token
const token = jwt.sign({ userId: 123 }, 'upikrules', { expiresIn: '1h' });

// Inclusão do token nas solicitações HTTP (por exemplo, com Axios)
axios.get('/api/some-endpoint', {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

const HomePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get('http://localhost:3001/api/images');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    fetchImages();
  }, []);

  const handleLike = async (imageId) => {
    try {
      await axios.post(`http://localhost:3001/api/likes/${imageId}`);
      // Atualizar a contagem de curtidas localmente (opcional)
    } catch (error) {
      console.error('Error liking image:', error);
    }
  };

  return (
    <div>
      <h1>Imagens</h1>
      <ImageList images={images} onLike={handleLike} />
    </div>
  );
};

export default HomePage;
