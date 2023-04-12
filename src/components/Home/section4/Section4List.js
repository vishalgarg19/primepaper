import React from "react";
import "./Section4List.css";

const list = [
  {
    id: 1,
    detail: "Covid protocols strictly followed at plant",
  },
  {
    id: 2,
    detail:
      "15+ years experience-right from brown-grades paper to finished boxes",
  },
  {
    id: 3,
    detail: "Delivery available for each and every region of India",
  },
  {
    id: 4,
    detail: "Management Skills for Operational Excellence",
  },
  {
    id: 5,
    detail: "Professional Team for Project Execution",
  },
  {
    id: 6,
    detail: "Advanced and relevant technology – equivalent to Asian standards",
  },
  {
    id: 7,
    detail: "High end manufacturing facilities",
  },
  {
    id: 8,
    detail: "Diversified clients across various industries",
  },
  {
    id: 9,
    detail: "100% on time deliveries",
  },
  {
    id: 10,
    detail: "100% clients satisfaction",
  },
  {
    id: 11,
    detail: "Required standards met at plant by staff regarding safety",
  },
];

const Section4List = () => {
  const listElement = list.map((item, index) => {
    return <li>{item.detail}</li>;
  });
  return (
    <>
      <ul>{listElement}</ul>
    </>
  );
};

export default Section4List;
