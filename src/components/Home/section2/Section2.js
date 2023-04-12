import React from "react";
import "./Section2.css";
import Card from "./Card";

const cardData = [
  {
    title: "MANUFACTURE BOXES & CARTONS",
    detail: "We manufacture entire range of corrugated boxes and cartons.",
  },
  {
    title: "CUSTOM CORRUGATED BOXES",
    detail:
      "We offer instant quotes, corrugated boxes and fast turn around times.",
  },
  {
    title: "ON-SITE TESTING LAB",
    detail: "We have an on-site testing lab that can meet your needs.",
  },
  {
    title: "OFFER PROMPT DELIVERY",
    detail:
      "We take pride in our ability to offer prompt delivery of your product.",
  },
];

const Section2 = () => {
  const CardItems = cardData.map((item, index) => {
    return <Card index={index} title={item.title} detail={item.detail} />;
  });
  return (
    <>
      <ul className="sec2">{CardItems}</ul>
    </>
  );
};

export default Section2;
