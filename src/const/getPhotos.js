export const getPhotos = () => {
    const likedPhotos = localStorage.getItem('likedPhotos');
    return likedPhotos ? JSON.parse(likedPhotos) : [];
  };
  