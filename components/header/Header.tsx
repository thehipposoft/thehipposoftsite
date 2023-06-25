import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

//Components
import Button from '../common/Button';
//Styles
import styles from './Header.module.scss';
import SideMenu from '../sideMenu';
import BackDrop from '../sideMenu/backDrop';

const Header = () => {
    const images = [
        '/assets/logo.png',
        '/assets/images/home/hippo2.png',
        '/assets/images/home/hippo3.png',
        '/assets/images/home/hippo4.png',
        '/assets/images/home/hippo5.png',
      ];
    const [sideMenu, setSideMenu] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const toggleSideMenu = () => {
        setSideMenu((prevState) => !prevState)
    };

    useEffect(() => {
        let timeoutId;
    
        if (isHovered) {
          timeoutId = setTimeout(() => {
            setCurrentIndex((prevIndex) => 1);
          }, 100);
    
          setTimeout(() => {
            setCurrentIndex((prevIndex) => 2);
          }, 400);

          setTimeout(() => {
            setCurrentIndex((prevIndex) => 3);
          }, 500);

          setTimeout(() => {
            setCurrentIndex((prevIndex) => 0);
          }, 600);
        }
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, [isHovered]);
    
      const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
        setCurrentIndex(0);
      };

    return (
        <motion.div 
            className={styles.container}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            viewport={{ once: true }}
        >
            <div
                className="image-transition-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    className={`image-transition ${isHovered ? 'hidden' : ''}`}
                    src={images[currentIndex]}
                    alt={'Hipposoft Logo'} 
                    width={154} 
                    height={60} 
                />
            </div>
            <Button label={'Menu'} onClick={toggleSideMenu} />
            <SideMenu sideMenu={sideMenu} closeSideMenu={toggleSideMenu}/>
            <BackDrop sideMenu={sideMenu} closeSideMenu={toggleSideMenu}/>
        </motion.div>
    )
};

export default Header;
