import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reel1 from "../assets/reel1.png";
import reel2 from "../assets/reel2.png";
import reel3 from "../assets/reel3.png";
import reel4 from "../assets/reel4.png";
import reel5 from "../assets/reel5.png";
import reel6 from "../assets/reel6.png";
import reel7 from "../assets/reel7.png";
import reel8 from "../assets/reel8.png";

const Reel = () => {
  const images = [
    { src: reel1, alt: "Reel 1", description: "Casual summer dress" },
    {
      src: reel2,
      alt: "Reel 2",
      description: "Beachwear: shorts and tank top",
    },
    { src: reel3, alt: "Reel 3", description: "Casual summer jumpsuit" },
    {
      src: reel4,
      alt: "Reel 4",
      description: "Classic denim jeans and white shirt",
    },
    { src: reel5, alt: "Reel 5", description: "Classic Striped Shirt" },
    { src: reel6, alt: "Reel 6", description: "Summer mini skirts" },
    { src: reel7, alt: "Reel 7", description: "Colorful summer dresses" },
    { src: reel8, alt: "Reel 8", description: "Oversized tees with Joggers" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="text-center md:p-4 p-1 mt-16  flex flex-col justify-center overflow-hidden">
      <h2 className="text-lg md:text-3xl font-bold mb-4">
        Summer styles to wear together or apart—whatever the weather
      </h2>
      <Slider {...settings} className="my-10">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
            <p className="mt-2 text-sm font-semibold">{image.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reel;
