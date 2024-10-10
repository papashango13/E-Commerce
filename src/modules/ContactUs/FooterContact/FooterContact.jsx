import React from "react";
import "./FooterContact.css";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom"; 

const FooterContact = () => {
  return (
    <div className="footercontact-container">
      <hr />
      <div className="footercontact-parent">
        <div className="footercontact-vince">
          <Link to="">
            <img
              src="./src/assets/images/ContactUs/FooterContact/vince.png"
              alt="Vince"
            />
          </Link>
          <p>
            Email: <Link className="footercontact-vince-link" to="info@ecomposershop.com">info@ecomposershop.com</Link>
          </p>
          <p>
            Phone: <Link className="footercontact-vince-link" to="tel:(212) 555-1234">(212) 555-1234</Link>
          </p>
          <p>Sign up for sale, new arrivals & more</p>
          <div className="footercontact-input">
            <TfiEmail className="footercontact-icon" />
            <input type="text" placeholder="Email address" />
            <button className="footercontent-btn">Sign Up</button>
          </div>
        </div>
        <div className="footercontact-about">
          <h4>About Us</h4>
          <Link className="foot-link" to="">About Us</Link>
          <Link className="foot-link" to="">Careers</Link>
          <Link className="foot-link" to="">Blog</Link>
          <Link className="foot-link" to="">Affiliate</Link>
          <Link className="foot-link" to="">Contact Us</Link>
          <Link className="foot-link" to="">Terms of use</Link>
        </div>
        <div className="footercontact-resource">
          <h4>Resource</h4>
          <Link className="foot-link" to="">Return policy</Link>
          <Link className="foot-link" to="">My Account</Link>
          <Link className="foot-link" to="">Find a Store</Link>
          <Link className="foot-link" to="">Legal & Privacy</Link>
          <Link className="foot-link" to="">Contact</Link>
        </div>
        <div className="footercontact-info">
          <h4>Information</h4>
          <Link className="foot-link" to="">Our Story</Link>
          <Link className="foot-link" to="">Visit Our Store</Link>
          <Link className="foot-link" to="">Contact Us</Link>
          <Link className="foot-link" to="">Account</Link>
        </div>
        <div className="footercontact-help">
          <h4>Help</h4>
          <Link className="foot-link" to="">FAQ</Link>
          <Link className="foot-link" to="">Terms of Use</Link>
          <Link className="foot-link" to="">Privacy Policy</Link>
          <Link className="foot-link" to="">Cookie Policy</Link>
          <Link className="foot-link" to="">Sitemap</Link>
        </div>
      </div>
      <hr className="footercontact-hr" />
      <div className="footercontact-bottom">
        <div className="footercontact-bottom-left">
          <p>© 2024 EComposer Store. All Rights Reserved.</p>
        </div>
      
        <div className="footercontact-bottom-right">
          <img
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ZTbOOI3C6atrust-hc.png?v=1724641892"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
