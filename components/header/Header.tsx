import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CSSTransition } from 'react-transition-group';

//Components
import Button from '../common/Button';
//Styles
import styles from './Header.module.scss';
import SideMenu from '../sideMenu';
import BackDrop from '../sideMenu/backDrop';

const imageUrls = [
  '/assets/logo.png',
  '/assets/images/home/hippo2.png',
  '/assets/images/home/hippo3.png',
  '/assets/images/home/hippo4.png',
  '/assets/images/home/hippo5.png',
];

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const startImageTransition = () => {
    setIsPlaying(true);
  };

  const stopImageTransition = () => {
    setIsPlaying(false);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, imageUrls.length]);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url; // Move the assignment here
        });
      });

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Failed to preload images:', error);
      }
    };

    preloadImages();
  }, [imageUrls]);

  const toggleSideMenu = () => {
    setSideMenu((prevState) => !prevState);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {imagesLoaded && (
        <CSSTransition
          key={currentImageIndex}
          timeout={200}
          classNames="image-transition"
        >
          <img
            className={'w-[164px]'}
            src={imageUrls[currentImageIndex]}
            alt="Current Image"
            onMouseEnter={startImageTransition}
            onMouseLeave={stopImageTransition}
          />
        </CSSTransition>
      )}

      <Button label={'Menu'} onClick={toggleSideMenu} />
      <SideMenu sideMenu={sideMenu} closeSideMenu={toggleSideMenu} />
      <BackDrop sideMenu={sideMenu} closeSideMenu={toggleSideMenu} />
    </motion.div>
  );
};

export default Header;