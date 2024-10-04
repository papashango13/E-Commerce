import React, { useEffect } from 'react';
import './BestChoice.css';
import bestChoicesData from '/home/user/Practice/Ecomposer/Free_Plant/src/utils/data/BestChoice.json'; 

const BestChoice = () => {
  const bestChoices = bestChoicesData.bestChoices; 

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    const cards = document.querySelectorAll('.choice-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='best-choice-wrapper'>
      <div className='best-choice-heading'>
        <h1>What Makes Our Coffee Makers the Best Choice?</h1>
      </div>
      <div className='choices-container'>
        {bestChoices.map((choice) => (
          <div key={choice.id} className="choice-card">
            <img src={choice.img} alt={choice.name} className="choice-image" />
            <h3>{choice.name}</h3>
            <p className="choice-description">{choice.description}</p>
          </div>
        ))}
      </div>
      <div className='choice-bottom-notes'>
        <h3><img src="./src/assets/images/LandingImages/LimitedWarranty.png" alt="Limited Warranty" /> 1-Year Limited Warranty</h3>
        <h3><img src="./src/assets/images/LandingImages/ExtendedWarranty.png" alt="Extended Warranty" /> Extended Warranty Options</h3>
        <h3><img src="./src/assets/images/LandingImages/FreeReplacement.png" alt="Free Replacement" /> Hassle-Free Replacements</h3>
      </div>
    </div>
  );
};

export default BestChoice;
