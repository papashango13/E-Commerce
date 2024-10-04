import React, { useState, useEffect } from "react";
import "./ClockTicking.css";
import { FaClock, FaRegHandPointRight } from "react-icons/fa";

const ClockTicking = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date();
      const target = new Date().setHours(24, 0, 0, 0);
      const difference = target - now;

      setTimeLeft({
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock-left-parent-div">
        <div className="clock-top-time-date">
          <FaClock /> Date: 20.6.2024 / Time: 14:30 EST
        </div>
        <h3 className="clock-mini-heading">Live Training Starting Soon!</h3>
        <div className="clock-hr-heading">
          <hr className="hr-line" />
          <h1 className="clock-main-heading">
            Unearth Our Findings and Learn How You Can Also Gain from Them
          </h1>
        </div>
        <p className="clock-description">
          <b>
            <u>This FREE Training Will Reveal The #1</u>
          </b>{" "}
          Way to Build an Effective Webinar Funnel AND Generate Leads
        </p>
        <button className="clock-claim-button">
          <div className="clock-claim-row">
            <FaRegHandPointRight className="claim-icon" />
            <p className="claim-text">CLAIM YOUR SEAT NOW</p>
          </div>
          <p className="clock-claim-subtext">
            Click Here To Save Your Free Seat Now!
          </p>
        </button>
        <div className="clock-back-ticking">
          <p>STARTS IN</p>
          <div className="clock-hour">
            <h1 className="clock-current-time">{timeLeft.hours}</h1>
            <p>Hours</p>
          </div>
          <p>:</p>
          <div className="clock-minutes">
            <h1 className="clock-current-time">{timeLeft.minutes}</h1>
            <p>Minutes</p>
          </div>
          <p>:</p>
          <div className="clock-seconds">
            <h1 className="clock-current-time">{timeLeft.seconds}</h1>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockTicking;
