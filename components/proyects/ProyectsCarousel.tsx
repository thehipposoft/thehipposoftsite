import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const ProyectsCarousel = ({ proyects }:any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    afterChange: (index) => setActiveIndex(index),
  };

  return (
    <Slider {...settings}>
      {proyects.map((proyect, index) => (
        <div 
          key={index}
          className={`px-4 py-12 relative text-center ${activeIndex === index ? 'center-proyect z-10' : ''}`}
          style={{ width: 100 }}
        >
          {
            activeIndex === index ?
              <a href={proyect.linkTo} rel='noreferrer' target={'_blank'} className={'proyect-display'}>
                <h3 className='text-center md:text-2xl'>{proyect.title}</h3>
                <img 
                  src={proyect.image} 
                  alt={`image ${index}`}
                />
              </a>
            : 
              <div className={'proyect-display'}>
                <h3 className='text-center md:text-2xl'>{proyect.title}</h3>
                <img 
                  src={proyect.image} 
                  alt={`image ${index}`}
                />
              </div>
          }
          <p className='absolute top-[50%] md:left-[41%] left-[35%] p-1 shadow-2xl'>Discover</p>
        </div>
      ))}
    </Slider>
  );
};

export default ProyectsCarousel;