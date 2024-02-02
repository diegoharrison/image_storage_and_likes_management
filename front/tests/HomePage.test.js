import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import HomePage from '../pages/index';

jest.mock('axios');

describe('HomePage', () => {
  test('renders images and handles likes', async () => {
    const images = [
      { id: 1, url: 'https://example.com/image1.jpg' },
      { id: 2, url: 'https://example.com/image2.jpg' }
    ];
    axios.get.mockResolvedValue({ data: images });

    render(<HomePage />);

    // Verificar se as imagens são exibidas
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();

    // Simular clique no botão de curtir
    fireEvent.click(screen.getByText('Like'));

    // Verificar se a solicitação de curtir foi enviada
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/api/likes/1');
  });
});
