import React from 'react';
import HelpCenter from './HelpCenter/HelpCenter';
import HelpDesk from './HelpDesk/HelpDesk';
import PopularSearched from './PopularSearched/Popular';
import Questions from './Questions/Questions';
import FooterContact from './FooterContact/FooterContact';



const Contact = () => {
  return <div>
    <HelpCenter/>
    <HelpDesk/>
   <PopularSearched/>
    <Questions/>
    <FooterContact/>
  </div>
};

export default Contact;
