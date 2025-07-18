import React from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const images = ["/images/nike.jpg", "/images/adi.jpg", "/images/puma.jpg"];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      {/* Navigation buttons */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* left button*/}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/50 p-3 rounded-full hover:bg-black/70"
      >
        <FaArrowLeft />
      </button>
      {/* right button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/50 p-3 rounded-full hover:bg-black/70"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ImageSlider;
