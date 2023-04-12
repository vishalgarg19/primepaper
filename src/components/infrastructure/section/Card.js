import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <li className="card">
        <div key={props.index}>
          <h3 className="title">{props.title}</h3>
          <div className="detail">{props.detail}</div>
        </div>
      </li>
    </>
  );
};

export default Card;
