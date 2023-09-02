import React from "react";
import Carousel from "nuka-carousel";
import nail1 from "./images/nail1.jpg";
import nail2 from "./images/nail2.jpg";
import nail3 from "./images/nail3.jpg";
import nail4 from "./images/nail4.jpg";
import TopNavBar from "./TopNavBar";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavBar />
      <main className="p-4 mx-auto flex-1">
      <Carousel
        wrapAround={true}
        autoplay={true}
        autoplayInterval={5000}
        className="carousel-container"
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
