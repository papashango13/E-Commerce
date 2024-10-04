import React from 'react';
import './Extraction.css';
import ExtractionData from '/home/user/Practice/Ecomposer/Free_Plant/src/utils/data/Extraction.json'; 
import CoffeeMachine2 from '/home/user/Practice/Ecomposer/Free_Plant/src/assets/images/LandingImages/CoffeeMachine2.png';

const Extraction = () => {
  return (
    <div className='extraction-wrapper'>
      <div className='extraction-heading'>
        <h1>Perfect Extraction for a Perfect Cup</h1>
      </div>

      <div className='extraction-left-right-parent'>

        
        <div className='extraction-left-json'>
          {ExtractionData.slice(0, 3).map((item) => (
            <div key={item.id} className='extraction-item'>
              <div className='extraction-text'>
                <h4>{item.heading}</h4>
                <p>{item.description}</p>
              </div>
              <div className='extraction-img'>
                <img src={item.img} alt="small-img" />
              </div>
            </div>
          ))}
        </div>

      
        <div className='extraction-middle-image'>
          <img src={CoffeeMachine2} alt="large-coffee-machine" />
        </div>

      
        <div className='extraction-right-json'>
          {ExtractionData.slice(3, 6).map((item) => (
            <div key={item.id} className='extraction-item'>
              <div className='extraction-img'>
                <img src={item.img} alt="small-img" />
              </div>
              <div className='extraction-text'>
                <h4>{item.heading}</h4>
                <p className='extraction-description-json'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Extraction;
