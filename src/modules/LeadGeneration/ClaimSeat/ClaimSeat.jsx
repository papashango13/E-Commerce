import React, { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import "./ClaimSeat.css";

const ClaimSeat = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email } = formData;

    if (!name || !phone || !email) {
      setError("All fields are required.");
      return;
    }

    console.log("User data:", formData);
    alert("Claim successful! Your details have been submitted.");
    setFormData({ name: "", phone: "", email: "" });
    setError("");
  };

  return (
    <div className="claim-container">
      <div className="claim-all-content">
        <div className="claim-heading">
          Limited Seats Available! Secure
          <span className="claim-span"> Your Spot Today!</span>
        </div>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="claim-input-parent">
            <div className="claim-name-phone">
              <input
                className="claim-email-phone"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="claim-email-phone"
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <input
              className="claim-email"
              type="text"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            <button className="claim-btn" type="submit">
              <FaHandPointRight className="claim-icon-btn" />
              CLAIM YOUR BEST SEAT NOW!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClaimSeat;
