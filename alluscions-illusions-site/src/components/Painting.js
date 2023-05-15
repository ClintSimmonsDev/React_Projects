import React from 'react';

function Painting(props) {
  const { title, painting } = props;


  return (
    <div className="painting">
      <img className="gallery-preview" src={painting.image} alt="painting"/>
      <h2>{title}</h2>
    </div>
  );
}

export default Painting;