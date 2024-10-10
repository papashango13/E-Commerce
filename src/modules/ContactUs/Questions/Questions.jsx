import React from "react";
import "./Questions.css";
import { Link } from "react-router-dom"; 

const Questions = () => {
  return (
    <div className="questions-container">
      <div className="questions-heading2">
        <h2>Any other questions?</h2>
      </div>
      <div className="questions-para">
        <p>
          We’re here to help. You can contact us: Weekdays: 6am to 6pm PT,
          Weekends: 6am to 6pm PT.
        </p>
      </div>
      <div className="questions-connect-info">
        <div className="questions-reach">
          <Link to=""><img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892" alt="img1" /></Link>
          <p className="questions-para2">Call</p>
          <Link className="questions-anchor" to="#">
            012-345-6789
          </Link>
        </div>
        <hr className="questions-hr" />
        <div className="questions-reach">
          <Link to=""><img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Lv4LCle25Yicon-lc-2.png?v=1724639488" alt="img2" /></Link>
          <p className="questions-para2">Email</p>
          <Link className="questions-anchor" to="#">
            Contact Us
          </Link>
        </div>
        <hr className="questions-hr" />
        <div className="questions-reach">
          <Link to=""><img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-nXKveOYRkzicon-lc-3.png?v=1724639522" alt="img3" /></Link>
          <p className="questions-para2">Chat</p>
          <Link className="questions-anchor" to="#">
            Chat Now
          </Link>
        </div>
        <hr className="questions-hr" />
        <div className="questions-reach">
          <Link to=""><img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-qX7d2R8frVicon-lc-4.png?v=1724639557" /></Link>
          <p className="questions-para2">Message</p>
          <Link className="questions-anchor" to="#">
            Support Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Questions;
