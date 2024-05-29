import React from "react";
import "../CSS/Slider.css";
import "../App.css";
import Sliderimage from "../assets/Rectangle 1843.png";
import Placeorder from "../assets/Frame 2.png";
import Google from "../assets/Capa_1.png";
import Review from "../assets/Customer review.png";
import Sabic from "../assets/SABIC Approved Fittings Manufacturer.png";
import Layer from "../assets/Layer_1-1.png";
import Layer1 from "../assets/Layer_1-2.png";
import Layer2 from "../assets/Layer_1-3.png";
import Layer3 from "../assets/Layer_1-4.png";
import Layer4 from "../assets/Layer_1-5.png";
import Layer6 from "../assets/5.png";

function Slider() {
  return (
    <div className="container">
      <div className="auto-container">
        <div className="section">
          <div className="slider">
            <div className="right-slider">
              <div className="firstimage">
                <img src={Sabic} alt="" />
              </div>
              <h1>Top Rated Product From Our High- Quality Products</h1>
              <div className="right-section">
                <div className="order">
                  <img src={Placeorder} alt="" />
                  <div className="review">
                    <img src={Google} alt="" />
                    <p>Customer Review</p>
                  </div>
                </div>
                <div className="star">
                  <div className="aranged">
                    <img src={Layer} alt="" />
                    <img src={Layer1} alt="" />
                    <img src={Layer2} alt="" />
                    <img src={Layer3} alt="" />
                    <img src={Layer4} alt="" />
                  </div>
                  <div className="arranged2">
                    <p>4.5 / 5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-slider">
              <div className="overlap-image">
                <img src={Sliderimage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
