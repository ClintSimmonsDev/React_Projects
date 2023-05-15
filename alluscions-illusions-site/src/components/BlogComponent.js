import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';


function BlogComponent(props) {
  const { paintings } = props;
  const today = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

  return (
    <div className='blog-page'>
      <img className="blog-art"src='./images/PA080582.jpg' alt='painting' />
      <h2 className='blog-title'>
        Maximizing your Fun
      </h2>
      <h5>-Alluscion</h5>
      <h5>{today}</h5>
        <p className='blog-text'>
          Playing with your My Little Pony play set can be a fun and enjoyable activity for many people, but what happens when you decide to take it to the next level by skydiving into a volcano while doing so? Well, let's just say it's not as easy as it seems.<br/><br/>

          First and foremost, the logistics of skydiving into a volcano with a My Little Pony play set in hand can be quite challenging. The weight of the toys, the wind resistance, and the heat from the volcano can all affect your ability to maneuver and control your parachute. Not to mention, trying to set up the play set while plummeting into the fiery depths of a volcano is no easy feat.<br/><br/>

          Secondly, playing with your My Little Pony play set while skydiving into a volcano can be incredibly dangerous. Not only are you risking injury or death from the skydiving aspect, but the extreme heat and toxic gases from the volcano can be harmful to your health and well-being.<br/><br/>

          Lastly, let's not forget about the mental strain of playing with your My Little Pony play set while skydiving into a volcano. The stress and adrenaline of the situation can make it difficult to focus on the task at hand, and the fear and panic of the impending doom can make it hard to fully enjoy the play set.<br/><br/>

          In conclusion, while the idea of playing with your My Little Pony play set while skydiving into a volcano may seem like a thrilling and adventurous idea, it's important to remember the many difficulties and dangers that come with it. It's best to stick to more traditional methods of playing with your My Little Pony collection and leave the extreme stunts to the professionals.<br/><br/>
        </p>
    </div>
  );
}

export default BlogComponent;