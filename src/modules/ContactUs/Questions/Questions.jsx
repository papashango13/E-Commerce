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
          <Link to=""><img src="./src/assets/images/ContactUs/Questions/1.png" alt="img1" /></Link>
          <p className="questions-para2">Call</p>
          <Link className="questions-anchor" to="#">
            012-345-6789
          </Link>
        </div>
        <hr className="questions-hr" />
        <div className="questions-reach">
          <Link to=""><img src="./src/assets/images/ContactUs/Questions/2.png" alt="img2" /></Link>
          <p className="questions-para2">Email</p>
          <Link className="questions-anchor" to="#">
            Contact Us
          </Link>
        </div>
        <hr className="questions-hr" />
        <div className="questions-reach">
          <Link to=""><img src="./src/assets/images/ContactUs/Questions/3.png" alt="img3" /></Link>
          <p className="questions-para2">Chat</p>
          <Link className="questions-anchor" to="#">
            Chat Now
          </Link>
        </div>
        <hr className="questions-hr" />
        <div className="questions-reach">
          <Link to=""><img src="./src/assets/images/ContactUs/Questions/4.png" alt="img4" /></Link>
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
