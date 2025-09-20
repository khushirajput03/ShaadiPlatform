import React, { useState } from 'react';
import './Grid.css'; 

const ServiceFAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question-header" onClick={toggleOpen}>
        <h3 className="faq-question">{question}</h3>
        <span className="faq-toggle-icon">
          {isOpen ? '×' : '+'} 
        </span>
      </div>
      <div className={`faq-answer-content ${isOpen ? 'show' : ''}`}>
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
};

export default ServiceFAQItem;