import React from 'react'
import './BlackStrip.css'
import BlackStripData from '../../../utils/data/BlackStrip.json'

const BlackStrip = () => {
  return (
        <div className="image-gallery">
      {BlackStripData.map((image,index) => (
        <div key={image.id} className="image-container">
          <img src={image.img} />
        </div>
      ))}
    </div>
    
  )
}

export default BlackStrip
