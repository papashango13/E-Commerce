import React, { useState, useEffect } from "react";
import "./Popular.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import PopularData from "../../../../src/utils/data/PopularSearched.json";

const PopularItem = ({ heading, para, isOpen, onToggle }) => (
  <div className="popular-item">
    <div className="popular-header" onClick={onToggle}>
      <h3 className="popular-heading">{heading}</h3>
      {isOpen ? (
        <IoIosArrowUp className="popular-btn" />
      ) : (
        <IoIosArrowDown className="popular-btn" />
      )}
    </div>
    {isOpen && (
      <div className="popular-body">
        <p>{para}</p>
      </div>
    )}
  </div>
);

const Popular = () => {
  const [data, setData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setData(PopularData);
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="popular-container">
      <h2 className="popular-heading2">Popular Searched Questions</h2>
      <div className="popular-list">
        {data.map((item, index) => (
          <PopularItem
            key={index}
            heading={<span className="popular-heading">{item.heading}</span>}
            para={item.para}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
