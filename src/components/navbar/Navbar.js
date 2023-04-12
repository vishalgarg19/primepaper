import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import logoImage from "../../assets/pplogo.png";
import "./Navbar.css";
import DropdownAboutUs from "./DropdownAboutUs";
import DropdownInfra from "./DropdownInfra";
// import DropdownSisterCompany from "./DropdownSisterCompany";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdownAboutUs, setDropdownAboutUs] = useState(false);
  const [dropdownInfra, setDropdownInfra] = useState(false);
  // const [dropdownSisterCompany, setDropdownSisterCompany] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenuAboutUs = () => setDropdownAboutUs(!dropdownAboutUs);
  const closeMobileMenuInfra = () => setDropdownInfra(!dropdownInfra);
  // const closeMobileMenuSisterCompany = () =>
  //   setDropdownSisterCompany(!dropdownSisterCompany);

  return (
    <nav className="navbar">
      <Link to="/" className="logoimg ">
        <img src={logoImage} alt="logo"></img>
      </Link>
      <div className="menu-icon menu" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {/* Home */}
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={handleClick}>
            Home
          </Link>
        </li>
        {/* About Us */}
        <li className="nav-item">
          <Link
            to="/about-us"
            className="nav-links"
            onClick={(closeMobileMenuAboutUs, handleClick)}
            onMouseEnter={closeMobileMenuAboutUs}
            // onMouseLeave={closeMobileMenuAboutUs}
          >
            About us
            <FaCaretDown />
          </Link>
          {dropdownAboutUs && (
            <DropdownAboutUs onMouseLeave={closeMobileMenuAboutUs} />
          )}
        </li>
        {/* Products */}
        <li className="nav-item">
          <Link to="/products" className="nav-links" onClick={handleClick}>
            Products
          </Link>
        </li>
        {/* infra */}
        <li className="nav-item">
          <Link
            to="/infrastructure"
            className="nav-links"
            onClick={(closeMobileMenuInfra, handleClick)}
            onMouseEnter={closeMobileMenuInfra}
          >
            Infrastructure
            <FaCaretDown />
          </Link>
          {dropdownInfra && (
            <DropdownInfra onMouseLeave={closeMobileMenuInfra} />
          )}
        </li>
        {/* sisterComapany */}
        {/* <li className="nav-item">
          <Link
            to="/sister-company"
            className="nav-links"
            onClick={(closeMobileMenuSisterCompany, handleClick)}
            onMouseEnter={closeMobileMenuSisterCompany}
          >
            Sister Company
            <FaCaretDown />
          </Link>
          {dropdownSisterCompany && (
            <DropdownSisterCompany
              onMouseLeave={closeMobileMenuSisterCompany}
            />
          )}
        </li> */}

        {/* careers */}
        <li className="nav-item">
          <Link to="/careers" className="nav-links" onClick={handleClick}>
            Careers
          </Link>
        </li>
        {/* contactUs */}
        <li className="nav-item">
          <Link to="/contact-us" className="nav-links" onClick={handleClick}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
