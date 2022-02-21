import React from 'react';
import Image from 'next/image';
//Components
import Button from '../common/Button';
//Styles
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.container}>
            <Image src={'/assets/logo.png'} alt={'Hipposoft Logo'} width={154} height={60} />
            <Button label={'MENU'} />
        </div>
    )
};

export default Header;
