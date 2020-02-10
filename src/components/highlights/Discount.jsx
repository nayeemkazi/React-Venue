import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };
  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={() => {
              this.percentage();
            }}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>Off</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets jeidin mon chay</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum pariatur corrupti repudiandae autem, ullam quisquam
                repellendus distinctio? Amet magni quisquam reprehenderit
                molestiae expedita voluptatum non minima vero itaque qui. Vitae.
              </p>

              <MyButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="#fff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
