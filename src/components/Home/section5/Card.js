import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./Card.css";

const list = [
  {
    title: "PACK N PACK",
    detail:
      "PACK N PACK is a leading & reputed name in North India for manufacturing corrugated boxes situated in Faridabad having a capacity to produce 1500 MT/month. We are catering to all kinds of Industries like Textile, Confectionary, Liquor, Soft drink, White Goods etc.Both company all units are setup with 5 ply automatic corrugation board line, lead edge printing with rotary die and sloter machine and auto folder gluer and well equipped quality laboratory.Both companies are catering to all kinds of Industries like Textile, Cosmetic, Confectionary, Liquor, Soft drink, & etc.",
    path: "/",
  },
  {
    title: "NARAYANI",
    detail:
      "Narayani Packaging is a leading & reputed name in Central India for Manufacturing & Supply of Corrugated Boxes & Plates and it is in this business from Last 35 Years and situated at Guwahati, Patna and Nagpur with the capacity to produce 2800 MT/month.",
    path: "/",
  },
];

const Card = () => {
  const section5List = list.map((item, index) => {
    return (
      <div className="section5-card">
        <h1 className="section5-h1">{item.title}</h1>
        <p>{item.detail}</p>
        <button className="button-30">
          <a href="www.sunpet.in" className="button">
            <span>Explore&nbsp;</span>
            <span>
              <FaArrowAltCircleRight />
            </span>
          </a>
        </button>
      </div>
    );
  });
  return <>{section5List}</>;
};

export default Card;
