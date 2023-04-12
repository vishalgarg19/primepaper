import React from "react";
import "./Careers.css";
import careerImg from "../../assets/careers2.png";
import Form from "./Form";

const Careers = () => {
  return (
    <div className="career">
      <div>
        <img src={careerImg} className="career-img" alt="career" />
      </div>
      <div className="form-section">
        <Form />
        <div className="address-section">
          <div>
            <p className="address-section-p">Phone</p>
            <p>8336326875</p>
            <p>8336326875</p>
          </div>
          <div>
            <p className="address-section-p">Address</p>
            <p>
              Prime Paper, Ricco Phase-2, Sri Ganganagar, Rajasthan - 335001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
