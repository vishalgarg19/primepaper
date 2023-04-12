import React from "react";
import "./Section.css";
import Card from "./Card";

const cardData = [
  {
    title: "Production Department",
  },
  {
    title: "Quality Testing Unit",
  },
  {
    title: "Research and Development Unit",
  },
  {
    title: "Packaging Unit",
  },
  {
    title: "Warehouse Unit",
  },
];

const Section = () => {
  const CardItems = cardData.map((item, index) => {
    return <Card index={index} title={item.title} detail={item.detail} />;
  });
  return (
    <>
      <ul className="sec">{CardItems}</ul>
    </>
  );
};

export default Section;
