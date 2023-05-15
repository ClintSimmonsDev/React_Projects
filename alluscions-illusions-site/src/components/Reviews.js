import React from 'react';
import stars from '../5stars.png';

const Reviews = () => {
  return (
    <div id="reviews-div">
      <div id="featured-review">
        <h4 id='review-header'>Latest Review</h4>
        <img id="stars" src={stars} alt='stars'></img>
        <p className='review-text'>Beautiful print, can't wait to buy more. Alluscion's art looks incredible on my walls and everyone asks where I got it. <br />- Shabblejepper Riznorf</p>
      </div>
    </div>
  );
};

export default Reviews;