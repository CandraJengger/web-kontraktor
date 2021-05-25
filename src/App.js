import React from 'react';
import { Navbar, Hero, AboutUs, GapBorder } from './components';
import Hero1 from './assets/images/hero-1.jpg';
import Hero2 from './assets/images/hero-2.jpg';
import Hero3 from './assets/images/hero-3.jpg';

const dataImage = [
  {
    id: 1,
    img: Hero1,
  },
  {
    id: 2,
    img: Hero2,
  },
  {
    id: 3,
    img: Hero3,
  },
];

function App() {
  return (
    <>
      <Navbar boxShadow={{ base: 'none', sm: 'md' }} zIndex="999999" />
      <Hero data={dataImage} />
      <GapBorder />
      <AboutUs />
      <GapBorder side="right" />
    </>
  );
}

export default App;
