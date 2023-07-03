import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { BallTriangle } from 'react-loader-spinner';
import Button from './Button/Button';
import { fetchParams } from './API/PixabyAPI';
import { Cont } from './App.styled';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchParams(searchQuery, page)
      .then(fetchedImages => {
        setImages(prevImages => [...prevImages, ...fetchedImages]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error: ', error);
        setIsLoading(false);
      });
  }, [searchQuery, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmit = query => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <Cont>
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <BallTriangle visible={isLoading} />}
        {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
      </Cont>
    </>
  );
};

export default App;
