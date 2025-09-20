import React from 'react';
import { cardData } from './cardData'; 
import './Grid.css'; 
import Card from './Card';

const ServiceCardSection = () => {
  return (
    <>
    <div className="card-grid-container">
      {cardData.map(card => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          label={card.label}
        />
      ))}
      
    </div>
    <div className='flex justify-center'> 
      <button className='bg-white text-[#601221]  flex items-center justify-center  p-2 pl-10 pr-10 mt-5 text-center border border-[#601221]  transition duration-1000 ease'>
          CONNECT NOW
        </button>
      </div>
        </>
  );
};

export default ServiceCardSection;
