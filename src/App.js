import React from "react";
import { Element } from "react-scroll";
import "./resources/styles.css";
import Header from "./components/header_footer/header";
import Featured from "./components/featured/index";
import VenueNFO from "./components/venueNFO/index";
import Highlights from "./components/highlights/index";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/footer";

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venue">
        <VenueNFO />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
