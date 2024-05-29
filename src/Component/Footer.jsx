import React from "react";
import "../CSS/Footer.css";
import "../App.css";
import F1 from "../assets/Group 37.png";
// import F2 from "../assets/Inspections third-party you can trust.png";
// import F3 from "../assets/Iso certified company.png";
// import F4 from "../assets/Quality Inspection.png";
import Center from "../assets/Group 124.png";
import Group from "../assets/Group 116.png";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import last1 from "../assets/Copyright © 2023 Shrikant Steel Centre. All rights reserved.png";
import last2 from "../assets/Terms & Conditions _ Privacy Policy _ Sitemap.png";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="auto-container">
          <div className="section">
            <div className="footer">
              <div className="right-footer">
                <div className="rf">
                  <img src={F1} alt="" />
                  <p>Inspection Third Party you can trust</p>
                </div>
                <div className="rf">
                  <img src={F1} alt="" />
                  <p>Quality Inspection</p>
                </div>
                <div className="rf">
                  <img src={F1} alt="" />
                  <p>ISO Certified Company</p>
                </div>
              </div>
              <div className="center-footer">
                <img src={Center} alt="" />
              </div>
              <div className="left-footer">
                <img src={Group} alt="" />
                <div className="icon">
                  <FaFacebookF />
                  <IoLogoInstagram />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="last-section container">
        <img src={last1} alt="" />
        <img src={last2} alt="" />
      </div>
    </>
  );
}

export default Footer;
