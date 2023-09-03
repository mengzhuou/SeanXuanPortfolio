import React, { useState, useEffect } from "react";
import Carousel from "nuka-carousel";
import nail1 from "./nailImages/nail1.jpg";
import nail2 from "./nailImages/nail2.jpg";
import nail3 from "./nailImages/nail3.jpg";
import nail4 from "./nailImages/nail4.jpg";
import TopNavBar from "./TopNavBar";
import "./Gallery.css";
import backgroundImg from "./otherImages/background.jpg"

const Gallery = () => {
  const [slidesToShow, setSlidesToShow] = useState(3); // Default to 3 slides on larger screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1); // Show only 1 slide
      } else {
        setSlidesToShow(3); // Show 3 slides on larger screens
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1 className='TitleTextStyle'>Welcome</h1>
      <h1 className='TitleTextStyle'>Check out some of our recent work.</h1>
      <TopNavBar />
      <div className="backgroundBody">
        <img className="gallery-background" src={backgroundImg} alt="backgroundImg"/>
      </div>
      <main className="p-4 mx-auto flex-1">
        <Carousel
          wrapAround={true}
          autoplay={true}
          autoplayInterval={5000}
          className="carousel-container"
          slidesToShow={slidesToShow}
        >
          <div className="carousel-slide">
            <img src={nail1} alt="nail1" />
          </div>
          <div className="carousel-slide">
            <img src={nail2} alt="nail2" />
          </div>
          <div className="carousel-slide">
            <img src={nail3} alt="nail3" />
          </div>
          <div className="carousel-slide">
            <img src={nail4} alt="nail4" />
          </div>
        </Carousel>
      </main>
    </div>
  );
};

export default Gallery;
