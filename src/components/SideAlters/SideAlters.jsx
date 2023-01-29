import React from 'react';
import './styles.css'
import image1 from "../../container/img/ez drip.jpg"
import image2 from "../../container/img/EzMil.jpg"
import image3 from "../../container/img/ez white.jpg"

const SideAlters = () => {
  return (
    <div className="images">
      <div className="image-container">
        <img src={image1} alt="image1" className="image img1" />
        <div className="image-overlay" />
      </div>

      <div className="image-container">
        <img src={image2} alt="image2" className="image" />
        <div className="image-overlay" />
      </div>

      <div className="image-container">
        <img src={image1} alt="image2" className="image" />
        <div className="image-overlay" />
      </div>
    </div>
  );
}

export default SideAlters;