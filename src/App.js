import React, { useState, useEffect } from 'react';
import { fetchPhotos } from './api/api.js';
import Loading from './components/loading/Loading.jsx';
import PhotoCard from './components/photoCard/PhotoCard.jsx';
import { getPhotos } from './const/getPhotos.js';
import { storePhotos } from './const/storePhotos.js';
import Input from './components/input/Input.jsx';
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [morePhotos, setMorePhotos] = useState(true);
  const [searchTags, setSearchTags] = useState('new');
  const [favoritedPhotos, setFavoritedPhotos] = useState(getPhotos());

  // The function loads page of photos from the API based on current tag
  const loadPhotosPage = () => {
    setLoading(true);
    fetchPhotos(searchTags)
      .then((response) => {
        if (response.length === 0) {
          setMorePhotos(false); // If there is no photos to load, stop loading
        } else {
          setPhotos((photos) => [...photos, ...response]); // New photos added to exising list
        }
      })
      .catch((error) => {
        console.error('Error loading photos:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Loading page of photos when search tag changes
  useEffect(() => {
    loadPhotosPage();
  }, [searchTags]);

  // Function handles infinite scrolling, loading more photos when the user scrolls down
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }
    loadPhotosPage();
  };

  // Scroll event listener for infinite scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  // Function for handle search input, update search tags and reset the photos
  const handleSearch = (tag) => {
    setSearchTags(tag);
    setPhotos([]);
  };

  // Storing favorited photos in local storage
  const storeFavourited = (photo) => {
    const likedPhotos = storePhotos(photo, getPhotos);
    setFavoritedPhotos(likedPhotos);
  };

  // Checking if a photo is already favorited
  const isPhotoFavorited = (photo) => {
    return favoritedPhotos.includes(photo.link);
  };

  return (
    <div>
      <Input onSubmit={handleSearch} />
      <div className="pictureContainer">
        {photos.map((photo, index) => (
          <PhotoCard
            key={`${photo.link}-${index}`}
            photo={photo}
            onLike={() => storeFavourited(photo)}
            isFavorited={isPhotoFavorited(photo)}
          />
        ))}
      </div>
      {loading && <Loading />}
      {!morePhotos && !loading && <div className="noImages">You have reached the end of the images, try a new tag!</div>}
    </div>
  );
};

export default App;
