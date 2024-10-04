import React from "react";
import "./PerfectCup.css";
import { MdStars, MdVerified } from "react-icons/md";
import { IoMdPlayCircle } from "react-icons/io";
import CoffeeMachine from "/home/user/Practice/Ecomposer/Free_Plant/src/assets/images/LandingImages/CoffeeMachine.png";
import GoodHousekeeping from "/home/user/Practice/Ecomposer/Free_Plant/src/assets/images/LandingImages/GoodHouskeeping.png";

const PerfectCup = () => {
  return (
    <div className="perfect-wrapper">
      <div className="perfect-content">
        <div className="rating-badge">
          <MdStars className="icon-star" /> 4.7 star over 275 ratings
        </div>
        <h2 className="content-heading">Brew the Perfect Cup Every Time</h2>
        <p className="content-description">
          Engineered for excellence, designed for coffee lovers.
        </p>
        <div className="feature-list">
          <p className="feature-item">
            <MdVerified className="icon-check" /> 4-In-1 Coffee Machine
          </p>
          <p className="feature-item">
            <MdVerified className="icon-check" /> Espresso & Nespresso Capsule
            Compatible
          </p>
          <p className="feature-item">
            <MdVerified className="icon-check" /> Single-Serve Coffee
          </p>
        </div>
        <button className="discover-btn">
          Discover More <IoMdPlayCircle />
        </button>
      </div>
      <div className="image-container">
        <img src={CoffeeMachine} alt="Coffee Machine" className="coffee-image" />
        <img src={GoodHousekeeping} alt="Good Housekeeping" className="badge" />
        <div className="badge-4in1">4-in-1</div>
      </div>
    </div>
  );
};

export default PerfectCup;
