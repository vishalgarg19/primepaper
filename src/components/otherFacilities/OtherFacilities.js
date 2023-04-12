import React from "react";
import "./OtherFacilities.css";

import img1 from "../../assets/facilities/1-png.png";
import img2 from "../../assets/facilities/2-png.png";
import img3 from "../../assets/facilities/3-png.png";
import img4 from "../../assets/facilities/4-png.png";
import img5 from "../../assets/facilities/5-png.png";
import img6 from "../../assets/facilities/6-png.png";
import img7 from "../../assets/facilities/7-png.png";
import img8 from "../../assets/facilities/8-png.png";
import img9 from "../../assets/facilities/9-png.png";

const OtherFacilities = () => {
  return (
    <div className="other-facilities">
      <div className="other-facilities-h1">
        <h1>Other facilities</h1>
      </div>

      <div className="img-conatainer-1">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <img src={img4} alt="img4" />
        <img src={img5} alt="img5" />
        <img src={img6} alt="img6" />
        <img src={img7} alt="img7" />
        <img src={img8} alt="img8" />
        <img src={img9} alt="img8" />
      </div>
      <hr />
      <div className="empty"> </div>
    </div>
  );
};

export default OtherFacilities;
