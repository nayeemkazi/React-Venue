import React, { Component } from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.960965289013!2d90.39502604350488!3d23.873975651464246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43d9289d035%3A0x54aa01cf9fb6a7c4!2sStandard%20Chartered%20Bank%20%7C%20ATM%20Booth!5e0!3m2!1sen!2sbd!4v1581330005797!5m2!1sen!2sbd"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen=""
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
