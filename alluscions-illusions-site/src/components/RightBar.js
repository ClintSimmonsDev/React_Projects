import React from 'react';
import FeaturedArt from './FeaturedArt';
import Reviews from './Reviews';
import SocialLinks from './SocialLinks';

const RightBar = () => {
  return (
    <div id='right-bar'>
      <SocialLinks />
      <FeaturedArt />
      <Reviews />
    </div>
  );
};

export default RightBar;