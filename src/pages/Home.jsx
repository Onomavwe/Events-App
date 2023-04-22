import React from 'react'
import Hero from '../components/Homepage/Hero'
import Trending from "../components/Homepage/Trending";
// import Events from '../components/Homepage/Events'
import Extras from "../components/Homepage/Extras";

const Home = () => {
  return (
    <>
     <Hero />
     <Trending />
     {/* <Events /> */}
     <Extras />
    </>
  );
}

export default Home