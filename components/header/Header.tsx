import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

//Components
import Button from '../common/Button';
//Styles
import styles from './Header.module.scss';

const Header = () => {
    return (
        <motion.div 
        className={styles.container}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        >
            <Image src={'/assets/logo.png'} alt={'Hipposoft Logo'} width={154} height={60} />
            <Button label={'MENU'} />
        </motion.div>
    )
};

export default Header;
