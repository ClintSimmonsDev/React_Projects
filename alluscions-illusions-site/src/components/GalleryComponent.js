import React from 'react';
import Painting from './Painting';

function GalleryComponent(props) {
  const paintings = props.paintings;

  return (
    <div id="galleryContainer">
      <section id="gallery">
      <h1 id="galleryTitle">Gallery</h1>
      {paintings.map(painting => (
        <Painting key={painting.id} painting={painting} />
      ))}
      </section>
    </div>
  )
}

export default GalleryComponent;







    