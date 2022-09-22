import React from 'react';
import styles from './Button.module.scss';

type ButtonType = {
    label: string,
}

const Button = (
    {
        label = 'Default',
    }: ButtonType
) => {

    return (
        <div className='relative'>
            <button
                type={'button'}
                className={styles.container}
            >
                {label}
            </button>
            <span className='bg-white h-[1px] w-[30px] absolute top-[25px]'/>
        </div>
    )
};

export default Button;
