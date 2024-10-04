import React from 'react';
import './HelpDesk.css';
import HelpDeskData from "../../../../src/utils/data/HelpDesk.json"; 
import { Link } from 'react-router-dom';  

const HelpDesk = () => {
  return (
    <div className='desk-container'>
      <div className='desk-heading'>
        <h2>Browse our help desk</h2>
      </div>
      <div className='desk-content-parent'>
        <div className='desk-actual-content'>
          {HelpDeskData.map((item) => (
            <div key={item.id} className="desk-item">
              <Link to={item.linkUrl}>
                <img src={item.image} className='desk-img' alt="Help Desk" />
              </Link>
              <h3 className='desk-map-heading'>{item.heading}</h3>
              <p className='desk-map-description'>{item.description}</p>
              <Link className="desk-link" to={item.linkUrl}>{item.linkText}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HelpDesk;
