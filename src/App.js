import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const App = () => {
  let images = [];

  for (let i = 0; i < 12; i++) {
    images.push({
      src: `https://pic.re/image/${Math.random()}`
    });
  }

  return (
    <Carousel images={images} style={{ height: 500, width: 800 }} />
  );
};

export default App;