import React, { Component } from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">The Hero Show</div>
        <div className="footer_copyright">
          The Hero Show 2020. All rights Reserved
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
