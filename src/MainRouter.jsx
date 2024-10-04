import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './modules/Home/Home';
import Contact from './modules/ContactUs/ContactUs';
import Landing from './modules/Landing/Landing';
import LeadGeneration from './modules/LeadGeneration/LeadGeneration'

const MainRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadgeneration" element={<LeadGeneration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
