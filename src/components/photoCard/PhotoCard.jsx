import React from 'react';
import Button from './../button/Button.jsx';
import './PhotoCard.css';

const PhotoCard = ({ photo, onLike, isFavorited }) => {

  // Removing email from users name
  const authorName = (author) => {
    const start = author.indexOf('("') + 2;
    const end = author.lastIndexOf('")');
    return author.substring(start, end);
  };

  return (
    <div className="photoContainer">
      <img src={photo.media.m} alt={photo.title} />
      <div className="photoData">
        <div className='textContainer'>
          <div className='boldText'>{photo.title}</div>
          <div className='separator'></div>
          <div className='italicText'>{authorName(photo.author)}</div>
        </div>
        <Button 
          onClick={() => onLike(photo)} 
          isFavorited={isFavorited}
        >
          Favourite
        </Button>
      </div>
    </div>
  );
};

export default PhotoCard;



