import React from "react";
import "./HostPage.css";
import { FaRegHandPointRight } from "react-icons/fa";

const HostPage = () => {
  return (
    <div className="host-container">
      <div className="host-heading">Your Host for the 3-Day <span className="host-span">Challenge!</span> </div>
      <div className="host-main-content-parent">
        <div className="host-left-child">
          <img
            src="	https://ecomposer-khoapham.myshopify.com/cdn/shop/…pmSecom-no-replace-2QLmz7vPqOFrame_1000004149.png"
            alt="David-Doe"
          />
          <h4 className="host-heading4">David DOE</h4>
          <p className="host-left-child-para">Marketing Funnels Expert</p>
        </div>
        <div className="host-right-child">
          <p>
            David is a consecutive business creator, 8-digit  virtual marketer,
            chart-topping author of <b> Virtual Fortune Blueprint, and an eternal
            disciple of Ella Kennedy.</b>
          </p>

          <p>
            He's the originator and proprietor of clickfunnels.com, where he
            mentors business visionaries on capturing additional patrons and
            expanding with certainty.
          </p>
          <p>
           <b> David has been showcased in Business Owner Magazine, Forbes,
            Corporate Insider, USA Today, and HuffPost.</b>
          </p>
          <p className="host-para-follow">FOLLOW ON SOCIAL</p>
          <div className="host-icon-div">
            <img
              src="./src/assets/images/LeadGenerationImages/HostPage/facebook.png"
              alt="facebook"
            />
            <img
              src="./src/assets/images/LeadGenerationImages/HostPage/skype.png"
              alt="skypee"
            />
            <img
              src="./src/assets/images/LeadGenerationImages/HostPage/pinterest.png"
              alt="pinterest"
            />
            <img
              src="./src/assets/images/LeadGenerationImages/HostPage/twitter.png"
              alt="Twitter"
            />
          </div>
        </div>
      </div>
      <div className="host-heading2">
        <h1 className>Seize the Opportunity to 
Transform Your Business with 
Personality-Driven Copywriting!</h1>

      </div>
      <div></div>
      <button className="clock-claim-button">
          <div className="clock-claim-row">
            <FaRegHandPointRight className="claim-icon" />
            <p className="claim-text">CLAIM YOUR SEAT NOW</p>
          </div>
          <p className="clock-claim-subtext">
            Click Here To Save Your Free Seat Now!
          </p>
        </button>
    </div>
  );
};

export default HostPage;
