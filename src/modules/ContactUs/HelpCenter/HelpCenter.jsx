import React from "react";
import "./HelpCenter.css";
import { SiGooglemaps } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";

const HelpCenter = () => {
  return (
    <div className="help-container">
      <div className="help-bg-blur"></div>   
      <div className="help-content-container">
        <h1 className="help-heading">HELP CENTER</h1>
        <p className="help-para">Let us know how we may help you?</p>
        <div className="help-search">
          <input type="text" placeholder="Search for answers" />
          <button >Search</button>
        </div>
        <div className="help-order-return-parent">
          <div className="help-tracking">
            <SiGooglemaps className="help-icon"/>
            <h4>Order Tracking</h4>
            <p>Log in to check the status of your order</p>
            <button>
              Track your order <FaLongArrowAltRight className="help-icon"/>
            </button>
          </div>
          <div className="help-exchange">
            <FaExchangeAlt className="help-icon"/>
            <h4>Return & Exchange</h4>
            <p>We make it easy to return and exchange styles.</p>
            <button>
              Start a return <FaLongArrowAltRight className="help-icon"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
