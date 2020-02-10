import React from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/header";
import Featured from "./components/featured/index";
import VenueNFO from "./components/venueNFO/index";
import Highlights from "./components/highlights/index";
import Pricing from "./components/pricing";
import Location from "./components/location";

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Featured />
      <VenueNFO />
      <Highlights />
      <Pricing />
      <Location />
    </div>
  );
}

export default App;
