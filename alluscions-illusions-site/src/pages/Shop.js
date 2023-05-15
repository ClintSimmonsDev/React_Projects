import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ShopComponent from '../components/ShopComponent';

function Shop(props) {
  const { paintings } = props;

  return (
      <div className="shop-page">
        <Header />
        <Navbar />
        <ShopComponent paintings = {paintings}/>
        <Footer />
      </div>
  );
}

export default Shop;