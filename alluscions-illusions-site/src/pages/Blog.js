import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogComponent from '../components/BlogComponent';


function Blog(props) {
  const { paintings } = props;

  return (
      <div className="gallery-page">
        <Header />
        <Navbar />
        <BlogComponent paintings = {paintings}/>
        <Footer />
      </div>
  );
}

export default Blog;