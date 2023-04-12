import React from "react";
import "./OurMachine.css";
import img1 from "../../assets/machines/machine-1-1.jpg";
import img2 from "../../assets/machines/machine-1-2.jpg";
import img3 from "../../assets/machines/machine-1-3.jpg";
import img4 from "../../assets/machines/machine-2-1.jpg";
import img5 from "../../assets/machines/machine-2-2.jpg";
import img6 from "../../assets/machines/machine-3-1.jpg";
import img7 from "../../assets/machines/machine-3-2.jpg";
import img8 from "../../assets/machines/machine-3-3.png";

const OurMachine = () => {
  return (
    <div className="our-machine">
      <div className="our-machine-h1">
        <h1>Our Machines</h1>
      </div>
      <div className="img-row">
        <div className="img-row-1">
          <div>
            <p>3/5 PlyAutomatic Corrugation Board Line</p>
          </div>
          <div className="img-conatainer-1">
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
          </div>
        </div>
        <div className="img-row-2">
          <div>
            <p>Lead Edge 2 Colour Printer Slotter With Die Cutter</p>
          </div>
          <div className="img-conatainer-2">
            <img src={img4} alt="img4" />
            <img src={img5} alt="img5" />
          </div>
        </div>
        <div className="img-row-3">
          <div>
            <p>Auto Folder Gluer</p>
          </div>
          <div className="img-conatainer-3">
            <img src={img6} alt="img6" />
            <img src={img7} alt="img7" />
            <img src={img8} alt="img8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMachine;
