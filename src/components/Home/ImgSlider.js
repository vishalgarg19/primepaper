import React from "react";
// import HeroSlider, { Slide } from "hero-slider";
import "./ImgSlider.css";
import img1 from "../../assets/corrugated1.jpg";
// import img2 from "../../assets/corrugated2.jpg";
// import img3 from "../../assets/corrugated3.jpg";

const ImageSlider = () => {
  return (
    <>
      {/* <HeroSlider
        height="100px"
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Slide
          background={{
            backgroundImageSrc: img1,
            backgroundAttachment: "fixed",
            backgroundImageStyle: { height: 600, marginBottom: 0 },
          }}
        ></Slide>
        <Slide
          background={{
            backgroundImageSrc: img2,
            backgroundAttachment: "fixed",
            backgroundImageStyle: { height: 600, marginBottom: 0 },
          }}
        ></Slide>
        <Slide
          background={{
            backgroundImageSrc: img3,
            backgroundAttachment: "fixed",
            backgroundImageStyle: { height: 600, marginBottom: 0 },
          }}
        ></Slide>
      </HeroSlider> */}
      <img src={img1} className="img-1" alt="image1" loading="lazy" />
      {/* <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={img1} className="d-block w-100" alt="img1" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img2} className="d-block w-100" alt="img2" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={img3} className="d-block w-100" alt="img2" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
};

export default ImageSlider;
