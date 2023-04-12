import React, { useState } from "react";
import { SisterCompanyItems } from "./Items";
import { Link } from "react-router-dom";
import "./DropdownSisterCompany.css";

const DropdownSisterCompany = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onMouseLeave={props.onMouseLeave}
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {SisterCompanyItems.map((item, index) => {
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
};

export default DropdownSisterCompany;
