import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import GalleryComponent from '../components/GalleryComponent';
import Footer from '../components/Footer';

function Gallery(props) {
  const { paintings } = props;

  return (
      <div className="gallery-page">
        <Header />
        <Navbar />
        <GalleryComponent paintings={paintings} />
        <Footer />
      </div>
  );
}

export default Gallery;