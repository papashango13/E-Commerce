import React from 'react';
import { MdVideoCameraFront } from "react-icons/md";
import './Headline.css';

const Headline = () => {
  return (
    <div className='headline-container'>
      <div className='headline-header'>
        <MdVideoCameraFront className='headline-icon' />
        <h4 className='headline-title'>LIVE Free Training: Funnels For Life Coaches</h4>
      </div>
      <div className='headline-info'>
        <ol className='info-list'>
          <li className='info-item'>Host: <h5>Robert Smith</h5></li>
          <li className='info-item'>Date: <h5>Webinar is 20.6.2024</h5></li>
          <li className='info-item'>Time: <h5>14:30 PM (America/Denver)</h5></li>
        </ol>
      </div>
    </div>
  );
};

export default Headline;
