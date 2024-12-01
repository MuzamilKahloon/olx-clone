import React, { useState, useEffect } from "react";
import slider1 from "../../public/HomeImages/slider1.jpeg";

const Slider = () => {
  const slides = [slider1]; // Single image in the array
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [slides.length]);

  return (
    <div className="relative w-full mt-10 max-w-[1200px] mx-auto overflow-hidden">
      {/* Image */}
      <div className="relative h-[200px] md:h-[500px] lg:h-[200px]">
        <img
          src={slides[currentIndex]}
          alt="Slider"
          className="object-contain w-full h-full"
        />
      </div>

      {/* Bottom White Line */}
      <div className="absolute bottom-2 z-10 left-1/2 transform -translate-x-1/2 w-[80px] h-[2px] bg-white" />
    </div>
  );
};

export default Slider;
