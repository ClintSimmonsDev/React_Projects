import React from 'react';
import fbLogo from '../facebook-icon-2.png';
import igLogo from '../IG_icon.png';
import twitterLogo from '../twitter-icon.png'

const SocialLinks = () => {
  return (
    <div id='social-links'>
      <h3 id="follow">Follow Me</h3>
      <a href="www.twitter.com/alluscion" className="social-icon">
        <img id="twitter-icon" src={twitterLogo} alt="twitter_icon"/>
      </a>
      <a href="www.facebook.com/alluscion" className="social-icon">
        <img id="fb-icon" src={fbLogo} alt="facebook_icon-2"/>
      </a>
      <a href="www.instagram.com/alluscion" className="social-icon">
        <img id="ig-icon" src={igLogo} alt="ig_icon"/>
      </a>
      
    </div>
  );
};

export default SocialLinks;