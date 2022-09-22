import React from 'react';
import { motion } from 'framer-motion';


const Banner = () => {
    return (
        <div className='relative'>
            <motion.div 
            initial={{opacity: 1}}
            className={'flex flex-col justify-center items-center h-[90vh] overflow-hidden relative'}
            >
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
                >We create to connect.</motion.h1>
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 50,
                        }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{duration: 1, delay: 0.5}}
                >
                    WE GOT TRIPS FOR THE TRIPPSTER IN YOU
                </motion.p>
            </motion.div>
        </div>

    )
};

export default Banner;
