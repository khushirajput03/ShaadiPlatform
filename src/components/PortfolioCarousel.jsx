import React from 'react';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const carouselImages = [
  { id: 1, src: 'https://shaadiplatform.com/wp-content/uploads/2025/05/43.png', alt: 'Happy wedding couple with petals' },
  { id: 2, src: 'https://shaadiplatform.com/wp-content/uploads/2025/05/44.png', alt: 'Couple exchanging rings' },
  { id: 3, src: 'https://shaadiplatform.com/wp-content/uploads/2025/05/45.png', alt: 'Bride and groom in traditional attire' },
  { id: 4, src: 'https://shaadiplatform.com/wp-content/uploads/2025/05/46.png', alt: 'Couple with fireworks' },
  { id: 5, src: 'https://shaadiplatform.com/wp-content/uploads/2025/05/47.png', alt: 'Bride and groom in a garden' },
  { id: 6, src: 'https://shaadiplatform.com/wp-content/uploads/2025/05/48.png', alt: 'Bride walking down aisle' },
  { id: 7, src: 'https://shaadiplatform.com/wp-content/uploads/2025/05/49.png', alt: 'Couple in an old building' },
  { id: 8, src: 'https://shaadiplatform.com/wp-content/uploads/2025/05/25.png', alt: 'Couple posing elegantly' },
];

const PortfolioCarousel = () => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000, 
    responsive: [ 
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselImages.map(image => (
          <div key={image.id} className="carousel-slide-item">
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PortfolioCarousel;
