import React from 'react'
import Events from '../components/events';
import Extras from '../components/Extras'; 
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Trending from '../components/Trending';

const Home = () => {
  return (
    <>
      <Hero />
      <Trending />
      <Events />
      <Extras />
      <Footer />
    </>
  );
}

export default Home