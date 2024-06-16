import React from 'react';
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
                className={`btn outline-none relative z-[1] cursor-pointer rounded-[48px] py-4 px-7 `}
                initial={{
                    opacity: 0,
                    y: 25,
                    }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{ once: true }}
                transition={{duration: 1.5}}
                onClick={onClick}
            >
                {label}
            </motion.button>
        </div>
    )
};

export default Button;
