import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

function Home(props) {
  const { paintings } = props;

  return (
      <div className="homepage">
        <Header />
        <Navbar />
        <MainContent paintings={paintings} />
        <Footer />
      </div>
  );
}

export default Home;
