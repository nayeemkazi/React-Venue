import React, { Component } from "react";
import Carousel from "./Carousel";
import TimeUntil from "./TimeUntil.js";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">Heroooo Alam</div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default Featured;
