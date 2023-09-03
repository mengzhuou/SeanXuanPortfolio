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
  const [slidesToShow, setSlidesToShow] = useState(3); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <TopNavBar />
      <main className="mx-2">
        <h1 className='GalleryTitleTextStyle'>Check out some of our recent work</h1>
        <div className="backgroundBody">
          <img className="gallery-background" src={backgroundImg} alt="backgroundImg"/>
        </div>
      </main>
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
