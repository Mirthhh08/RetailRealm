import React from 'react';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';

const Popular = () => {
  const imagesData = [
    {
      src: product1,
      heading: 'The Art of Layering',
      button1Label: 'ezmart editions',
      button2Label: 'Explore lookbook',
    },
    {
      src: product2,
      heading: 'New Arrivals',
      button1Label: 'Shop women',
      button2Label: 'Shop men',
    },
    {
      src: product3,
      heading: 'Best-Sellers',
      button1Label: 'Shop women',
      button2Label: 'Shop men',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4 mt-16">
      <h2 className="col-span-3 text-3xl font-bold mb-4 text-center">Select the best that fits your style</h2>
      {imagesData.map((image, index) => (
        <div key={index} className="relative h-full">
          <img src={image.src} alt={`Image ${index + 1}`} className="w-full h-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{image.heading}</h2>
            <div className="flex justify-center">
              <button className="bg-white text-black border-black font-semibold py-1 px-4 mr-4">{image.button1Label}</button>
              <button className="bg-white text-black border-black font-semibold py-1 px-4">{image.button2Label}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Popular;
