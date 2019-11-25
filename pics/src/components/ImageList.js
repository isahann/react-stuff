import React from 'react';

import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
  console.log(props.images);

  // Better than using props.images.map((image) => {}), we are
  // only looking for the id, description and urls inside each image
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
