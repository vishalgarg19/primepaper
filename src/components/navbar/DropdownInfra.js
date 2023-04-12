import React, { useState } from "react";
import { InfrastructureItems } from "./Items";
import { Link } from "react-router-dom";
import "./DropdownInfra.css";

const DropdownInfra = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onMouseLeave={props.onMouseLeave}
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {InfrastructureItems.map((item, index) => {
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

export default DropdownInfra;
