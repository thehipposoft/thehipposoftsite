import React from 'react';
//Sytles
import { motion } from 'framer-motion';

//Components


const Footer = () => {
    return(
        <div className='max-w-[1200px] m-auto flex flex-col items-center'>
            <motion.h1
                initial={{
                    opacity: 0,
                    x: -50,
                    }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: true }}
                transition={{duration: 1}}
            >See you soon!
            </motion.h1>
            <motion.p
                initial={{
                    opacity: 0,
                    y: 50,
                    }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 0.5}}
            >We hope to meet each other very soon.</motion.p>
        </div>
    )
}

export default Footer;