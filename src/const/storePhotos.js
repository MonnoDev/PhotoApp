export const storePhotos = (photo, getPhotos) => {
  const likedPhotos = getPhotos();
  const isPhotoLiked = likedPhotos.includes(photo.link);
  const updatedPhotos = isPhotoLiked
    ? likedPhotos.filter(link => link !== photo.link)
    : [...likedPhotos, photo.link];

  localStorage.setItem('likedPhotos', JSON.stringify(updatedPhotos));

  return updatedPhotos;
};
