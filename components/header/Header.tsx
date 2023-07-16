import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
//Components
import Button from '../common/Button';
import SideMenu from '../sideMenu';
import BackDrop from '../sideMenu/backDrop';
//Styles
import styles from './Header.module.scss';

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const toggleSideMenu = () => {
    setSideMenu((prevState) => !prevState);
  };

  return (
    <motion.div
      className={`${styles.container}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <a href={'/'}>
        <Image 
          src={'/assets/logo.png'} 
          alt={'Hipposoft Logo'} 
          width={154} 
          height={60} 
        />
      </a>
     
      <Button label={'Menu'} onClick={toggleSideMenu} />
      <SideMenu sideMenu={sideMenu} closeSideMenu={toggleSideMenu} />
      <BackDrop sideMenu={sideMenu} closeSideMenu={toggleSideMenu} />
    </motion.div>
  );
};

export default Header;