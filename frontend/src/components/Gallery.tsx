import React, { useState, useEffect } from "react";
import Carousel from "nuka-carousel";
import nail1 from "./nailImages/nail1.jpg";
import nail2 from "./nailImages/nail2.jpg";
import nail3 from "./nailImages/nail3.jpg";
import nail4 from "./nailImages/nail4.jpg";
import nail5 from "./nailImages/nail5.jpg";
// import nail6 from "./nailImages/nail6.jpg";
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
    <div className="flex flex-col min-h-screen">
      <TopNavBar />
      <main className="mx-2">
        <h1 className='GalleryTitleTextStyle'>Check out some of our recent work</h1>
        <div className="backgroundBody">
          <img className="gallery-background" src={backgroundImg} alt="backgroundImg"/>
        </div>
      </main>
      <main className="flex-1 p-4 mx-auto">
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
          <div className="carousel-slide">
            <img src={nail5} alt="nail5" />
          </div>
          {/* <div className="carousel-slide">
            <img src={nail6} alt="nail6" />
          </div> */}
        </Carousel>
      </main>
    </div>
  );
};

export default Gallery;
