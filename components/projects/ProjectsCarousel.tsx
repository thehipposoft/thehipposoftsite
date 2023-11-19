"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectsCarousel = ({ projects }:any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  var settings = {
    infinite: true,
    speed: 500,
    autoplay: false,
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
    afterChange:(index: number) => setActiveIndex(index),
  };

  return (
    <>
      {/* 
        // @ts-ignore */}
      <Slider {...settings}>
        {projects && projects.map((project: any, index: number) => (
          <div 
            key={index}
            className={`px-4 py-12 relative text-center ${activeIndex === index ? 'center-proyect cursor-pointer z-10' : ''}`}
            style={{ width: 100 }}
          >
            {
              activeIndex === index ? 
              <a 
                href={project.linkTo} 
                rel='noreferrer' 
                target={'_blank'} 
                className={'proyect-display'}
              >
                <div className={'absolute w-full h-[80%] items-center justify-center flex left-0 right-0 mr-auto ml-auto z-10 '}>
                  <div>
                    <h3 className='text-center lg:text-2xl'>
                      {project.title}
                    </h3>
                    <p className='p-1 shadow-2xl'>
                      Discover
                    </p>
                  </div>
                  <div className={'absolute w-10 h-8 bg-white bottom-[1.7rem] flex justify-center items-center item-arrow'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 17 10" fill="none">
                      <path d="M8.22957 9.75912C7.93456 9.75912 7.66636 9.65184 7.45181 9.43729L0.747045 2.46433C0.344759 2.03523 0.344753 1.36476 0.773858 0.935652C1.20296 0.533366 1.87346 0.533368 2.30256 0.962473L8.22957 7.13086L14.1566 0.962473C14.5589 0.533368 15.2562 0.533367 15.6853 0.935653C16.1144 1.33794 16.1143 2.03523 15.7121 2.46433L9.00733 9.43729C8.79278 9.65184 8.52458 9.75912 8.22957 9.75912Z" fill="#181818"/>
                    </svg>
                  </div>
                </div>
                <img 
                  src={project.image} 
                  alt={`image ${index}`}
                />
              </a> 
              : <div className={'proyect-display'}>
                <div className={'absolute w-full h-[80%] items-center justify-center flex flex-col'}>
                  <h3 className='text-center md:text-2xl'>
                    {project.title}
                  </h3>
                  <p className='p-1 shadow-2xl'>
                    Discover
                  </p>
                </div>
                <img 
                  src={project.image} 
                  alt={`image ${index}`}
                />
              </div>
            }
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ProjectsCarousel;