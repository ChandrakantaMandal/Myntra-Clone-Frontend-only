import React, { useState, useEffect } from "react";
import "../Slideshow.css"; // Create a separate CSS file for styling

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "images/img2.png" },
    { src: "images/img3.png" },
    { src: "images/img4.png" },
    { src: "images/img5.png" },

  ];

  // Function to go to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          // <div
          //   key={index}
          //   className={`mySlides fade ${index === currentSlide ? "active" : ""}`}
          //   style={{ display: index === currentSlide ? "block" : "none" }}
          // >
          //   <div className="numbertext">{`${index + 1} / ${slides.length}`}</div>
          //   <img src={slide.src} alt={slide.caption} style={{ width: "100%" }} />
          //   <div className="text">{slide.caption}</div>
          // </div>
          <div
  key={index}
  className={`mySlides fade ${index === currentSlide ? "active" : ""}`}
>
  <div className="numbertext">{`${index + 1} / ${slides.length}`}</div>
  <img src={slide.src} alt={slide.caption} style={{ width: "100%" }} />
  <div className="text">{slide.caption}</div>
</div>

        ))}
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
