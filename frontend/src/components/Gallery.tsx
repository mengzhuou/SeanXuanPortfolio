import React from "react";
import Carousel from "nuka-carousel";
import nail1 from "./nailImages/nail1.jpg";
import nail2 from "./nailImages/nail2.jpg";
import nail3 from "./nailImages/nail3.jpg";
import nail4 from "./nailImages/nail4.jpg";
import TopNavBar from "./TopNavBar";
import "./Gallery.css";
import backgroundImg from "./otherImages/background.jpg"

const Gallery = () => {
  return (
    <div>
      <h1 className='welcomeStyle'>Welcome</h1>
      <h1 className='welcomeStyle'>Check out some of our recent work.</h1>
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
          // slidesToShow={1}
          slideWidth="300px"
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
