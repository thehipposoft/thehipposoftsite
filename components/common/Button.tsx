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
        <div>
            <button
                type={'button'}
                className={styles.container}
            >
                {label}
            </button>
        </div>
    )
};

export default Button;
