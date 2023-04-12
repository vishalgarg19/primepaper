import React from "react";
// import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./Section3.css";

const Section3 = () => {
  return (
    <>
      <div className="sec3">
        <h1 className="sec3-h1">
          Custom Designed Corrugated Boxes and Cartons
        </h1>
        <p>
          Looking for affordable and high-quality corrugated boxes for packing
          and shipping? Our cardboard packing boxes offer superior quality,
          durability, versatility. These carton boxes may be used for commercial
          packaging, gift packaging, storage, wine bottle packing and
          transportation,relocation, and much more.
        </p>
        <button className="button-30">
          <a href="www.sunpet.in" className="button">
            <span>Corrugated Box&nbsp;</span>
            <span>
              <FaArrowAltCircleRight />
            </span>
          </a>
        </button>
      </div>
    </>
  );
};

export default Section3;
