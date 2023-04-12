import React from "react";
import {
  FaArrowAltCircleRight,
  FaAddressBook,
  FaIndustry,
  FaEnvelopeOpenText,
  FaHeadset,
} from "react-icons/fa";
// import { Link } from "react-router-dom";
import logoImage from "../../assets/pplogofooter.png";
import "./SubFooter1.css";

const SubFooter1 = () => {
  return (
    <>
      <footer className="top">
        {/* col-1 */}
        <img src={logoImage} alt="logo"></img>
        <div className="links">
          {/* col-2 */}
          <div>
            <h2>Menu</h2>
            <a href="/">
              <FaArrowAltCircleRight />
              <h>&nbsp;&nbsp;Home</h>
            </a>
            <a href="/about-us">
              <FaArrowAltCircleRight />
              <h>&nbsp;&nbsp;About Us</h>
            </a>
            <a href="/products">
              <FaArrowAltCircleRight />
              <h>&nbsp;&nbsp;Products</h>
            </a>
            <a href="/infrastructure">
              <FaArrowAltCircleRight />
              <h>&nbsp;&nbsp;Infrastructure</h>
            </a>
            <a href="/contact-us">
              <FaArrowAltCircleRight />
              <h>&nbsp;&nbsp;Contact Us</h>
            </a>
          </div>

          {/* col-3 */}
          <div>
            <h2>Quick Links</h2>

            <a href="/our-macjines">
              <FaArrowAltCircleRight />
              <h>&nbsp;&nbsp;Our Machines</h>
            </a>
            <a href="/other-facilities">
              <FaArrowAltCircleRight />
              <h>&nbsp;&nbsp;Other facilities</h>
            </a>
            <a href="/our-certificates">
              <FaArrowAltCircleRight />
              <h>&nbsp;&nbsp;Our Certificates</h>
            </a>
          </div>

          {/* col-4 */}
          <div>
            <h2>Reach Us</h2>

            <div>
              <FaAddressBook />
              <h>
                &nbsp;&nbsp;S-319, GREATER KAILASH , PART-II, NEW DELHI - 110048
              </h>
            </div>
            <div>
              <FaIndustry />
              <h>
                &nbsp;&nbsp;PLOT 9, SECTOR 1A, I.I.E., RANIPUR, HARIDWAR,
                UTTARAKHAND
              </h>
            </div>
            <div>
              <FaEnvelopeOpenText />
              <h>&nbsp;&nbsp;sales@gulshanlameepack.com</h>
            </div>
            <div>
              <FaHeadset />
              <h>&nbsp;&nbsp;01334-235056, 235057</h>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bottom">
        <div className="legal">
          <span>
            Copyright © 2023 Gulshan Lameepack | Powered by Astatine Group
          </span>
        </div>
      </footer>
    </>
  );
};

export default SubFooter1;
