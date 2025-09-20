import React from 'react';
import ServiceFAQItems from './ServiceFAQItems';
import './Grid.css'; 


const faqData = [
  {
    id: 1,
    question: 'When should I start planning my wedding?',
    answer: 'Ideally 6-12 months in advance, depending on the scale of your wedding.'
  },
  {
    id: 2,
    question: 'Can you help with both traditional and modern themes?',
    answer: 'Yes, our experienced planners specialize in blending or creating distinct traditional and modern themes to suit your vision.'
  },
  {
    id: 3,
    question: 'Do you handle destination weddings abroad?',
    answer: 'Absolutely! We have extensive experience with destination weddings and can assist with all logistics, including venue selection, vendor coordination, and travel arrangements.'
  },
  {
    id: 4,
    question: 'What if I\'ve already booked some vendors?',
    answer: 'No problem! We can seamlessly integrate with your existing vendor bookings and help you manage the rest of the planning process.'
  },
  {
    id: 5,
    question: 'How do I get started?',
    answer: 'Simply contact us through our website or give us a call to schedule a free consultation. We\'d love to discuss your wedding dreams!'
  }
];

const ServiceFAQSection = () => {
  return (
    <section className="faq-section-container">
      <div className="faq-image-wrapper">
        <img
          src="/ring.png"
          alt="Wedding rings on a pillow"
          className="faq-hero-image mt-20"
        />
      </div>
      <div className="faq-content-wrapper">
        {/* You can add a star icon here if you like */}
        <div className="faq-header-star">✨</div> 
        <h2 className="faq-main-title">FREQUENTLY ASKED <br /> QUESTIONS</h2>
        <p className="faq-intro-text">
          Planning your big day comes with a lot of questions — and we’re here to answer
          them all. From timelines to themes, venues to visas, our experts ensure your
          journey to 'I do' is as smooth and magical as possible.
        </p>

        <div className="faq-items-list">
          {faqData.map(item => (
            <ServiceFAQItems key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQSection;