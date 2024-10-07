import React from "react";
import "./AddBenefits.css";
import { GrUserExpert } from "react-icons/gr";
import { GiOpenBook } from "react-icons/gi";
import { VscRadioTower } from "react-icons/vsc";
import { IoIosNavigate } from "react-icons/io";

const AddBenefits = () => {
  return (
    <div className="add-container">
        <div className="add-heading"><h1>Additional Benefits</h1></div>
      
      <div className="add-parent-left-right"><div className="add-left-side">
        <img src="https://cdn.shopify.com/s/files/1/0623/8303/0317/f…o-replace-UzgJte0qv4Rectangle_15.jpg?v=1716445752" alt="" />
      </div>
      <div className="add-right-side">
        <div className="add-icon-para">
        <GrUserExpert className="add-icon"/>
          <p>Interactive Q&A sessions with industry experts</p>
        </div>
        <div className="add-icon-para">
        <GiOpenBook className="add-icon"/>
          <p>Live case studies showcasing successful funnel strategies</p>
        </div>
        <div className="add-icon-para">
        <VscRadioTower className="add-icon"/>
          <p>Networking opportunities with potential collaborators and clients</p>
        </div>
        <div className="add-icon-para">
        <IoIosNavigate className="add-icon"/>
          <p>Access to post-event resources and recordings</p>
        </div>
      </div></div>
      
    </div>
  );
};

export default AddBenefits;
