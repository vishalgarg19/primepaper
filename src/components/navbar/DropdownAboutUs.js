import React, { useState } from "react";
import "./DropdownAboutUs.css";
import { Link } from "react-router-dom";
import { AboutUsItems } from "./Items";

function DropdownAboutUs(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onMouseLeave={props.onMouseLeave}
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {AboutUsItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropdownAboutUs;
