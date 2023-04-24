import React from 'react';
import styles from './Button.module.scss';
import { motion } from 'framer-motion';


type ButtonType = {
    label: string,
    onClick?: any,
}

const Button = (
    {
        label = 'Default',
        onClick
    }: ButtonType
) => {

    return (
        <div>
            <motion.button
                type={'button'}
                className={styles.btn}
                initial={{
                    opacity: 0,
                    y: 25,
                    }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{ once: true }}
                transition={{duration: 1.5, delay: 1}}
                onClick={onClick}
            >
                {label}
            </motion.button>
        </div>
    )
};

export default Button;
