import React from "react";
import "./circle.css";

const Circle = () => {
  return (
    <div class="circle-wrap">
      <div class="circle">
        <div class="mask full">
          <div class="fill"></div>
        </div>

        <div class="mask half">
          <div class="fill"></div>
        </div>

        <div class="inside-circle">100%</div>
      </div>
    </div>
  );
};

export default Circle;
