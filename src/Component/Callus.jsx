import React from "react";
import "../CSS/Callus.css";
import "../App.css";
import { IoMdMail } from "react-icons/io";
import MovingText from "react-moving-text";

function Callus() {
  return (
    <div className="container">
      <div className="auto-container">
        <div className="sections">
          <div className="center-section">
            <div className="callus">
              <MovingText
                type="fadeInFromLeft"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="infinite"
                fillMode="none"
              >
                Our Expert Consultation
              </MovingText>
              <p>Ready to give best solution for your project</p>
            </div>
            <div className="leftcall">
              <div className="rightcall">
                <IoMdMail />
                <p>Enter Your Mail</p>
              </div>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Callus;
