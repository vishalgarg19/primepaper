import React from "react";
import "./ContactUs.css";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div>
      <div className="top-section">
        <p>Contact Us</p>
      </div>
      <div className="contactform-section">
        <ContactForm />
        <div className="address-section">
          <div className="Conatact-datails">
            <div>
              <p className="address-section-p">Phone</p>
              <p>8336326875</p>
              <p>8336326875</p>
            </div>
            <div>
              <p className="address-section-p">Email Us</p>
              <p>sales@gulshanlameepack.com</p>
            </div>
          </div>

          <div className="address-detail">
            <div>
              <p className="address-section-p">Office Address</p>
              <p>
                Prime Paper, Ricco Phase-2, Sri Ganganagar, Rajasthan - 335001
              </p>
            </div>
            <div>
              <p className="address-section-p">Plant Address</p>
              <p>
                Prime Paper, Ricco Phase-2, Sri Ganganagar, Rajasthan - 335001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
