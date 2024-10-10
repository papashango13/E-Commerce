import React from "react";
import "./MasterClass.css";
import { HiBadgeCheck } from "react-icons/hi";

const MasterClass = () => {
  return (
    <div className="master-container">
      <h4 className="master-heading4">Is This Master Class Right for</h4>
      <h1 className="master-heading">You and Your Business</h1>
      <div className="master-upper-parent"><h2 className="master-heading2">YES! This Challenge Is For You, Especially If...</h2>
      <div className="master-parent-card">
        
        <div className="master-left-card">
          <p className="master-para">
            <HiBadgeCheck className="master-icon"/>
            <b>You're tired of building funnel after</b> funnel and not seeing
            the desired results
          </p>
          <p className="master-para">
            <HiBadgeCheck className="master-icon"/>
            <b>Your copywriting isn't converting</b> as you'd hoped.
          </p>
          <p className="master-para">
            <HiBadgeCheck className="master-icon"/>
            <b>You want to create an irresistible</b> offer that converts every
            time.
          </p>
          <p className="master-para">
            <HiBadgeCheck className="master-icon"/>
            <b>You aim to attract new clients</b> effortlessly and be seen as an
            authority in your field
          </p>
        </div>
        <div className="master-right-card">
            <img src="https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-vcHvKXEfBPRectangle_10.jpg?v=1716435193" alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default MasterClass;
