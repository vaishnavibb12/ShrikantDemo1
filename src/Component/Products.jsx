import React from "react";
import "../CSS/Product.css";
import "../App.css";
import MovingText from "react-moving-text";
import Pro from "../assets/Clip path group-1.png";

function Products() {
  return (
    <div className="container">
      <div className="auto-container">
        <div className="sections">
          <div className="headings">
            <MovingText
              type="bounce"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none"
            >
              Our Other Products
            </MovingText>
            <p>
              Shrikant Steel Manufacturers Stainless Getting High Demand Order
            </p>
          </div>
          <div className="product">
            <div className="subproduct">
              <div className="mini-product">
                <h3>
                  STAINLESS <span>FORGED FITTING</span>
                </h3>
                <img src={Pro} alt="" />
              </div>
            </div>
            <div className="subproduct">
              <div className="mini-product">
                <h3>
                  STAINLESS <span>STEEL TUBES</span>
                </h3>
                <img src={Pro} alt="" />
              </div>
            </div>
            <div className="subproduct">
              <div className="mini-product">
                <h3>
                  STAINLESS <span>STEEL SEAMLESS PIPE</span>
                </h3>
                <img src={Pro} alt="" />
              </div>
            </div>
            <div className="subproduct">
              <div className="mini-product">
                <h3>
                  STAINLESS <span>STEEL WELDED PIPE</span>
                </h3>
                <img src={Pro} alt="" />
              </div>
            </div>
            <div className="subproduct">
              <div className="mini-product">
                <h3>
                  STAINLESS <span>FORGED FITTING</span>
                </h3>
                <img src={Pro} alt="" />
              </div>
            </div>
            <div className="subproduct">
              <div className="mini-product">
                <h3>
                  STAINLESS <span>STEEL TUBES</span>
                </h3>
                <img src={Pro} alt="" />
              </div>
            </div>
            <div className="subproduct">
              <div className="mini-product">
                <h3>
                  STAINLESS <span>STEEL SEAMLESS PIPE</span>
                </h3>
                <img src={Pro} alt="" />
              </div>
            </div>
            <div className="subproduct">
              <div className="mini-product">
                <h3>
                  STAINLESS <span>STEEL WELDED PIPE</span>
                </h3>
                <img src={Pro} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
