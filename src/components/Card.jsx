import React from 'react';
import './Grid.css'; 

const Card = ({ imageUrl, label }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageUrl} alt={label} className="card-image" />
      </div>
      <div className="card-label-bar">
        <p className="card-label">{label}</p>
      </div>
    </div>
  );
};

export default Card;
