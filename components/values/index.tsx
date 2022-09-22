import React from 'react';
//Components & constants
import { motion } from 'framer-motion';
import { VALUES_DATA } from './constants';
import Box from './Box';

const Value = () => {
    return(
        <div className='max-w-[1200px] m-auto'>
            <div className='flex flex-col items-center'>
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
                >We add value</motion.h1> 
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
                className='md:mb-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</motion.p>
            </div>
            <motion.div 
            className='grid md:grid-cols-3 grid-cols-1 gap-8'
            initial={{
                opacity: 0,
                x: -50,
                }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 1}}
            >
                {VALUES_DATA.map((item, index) => <Box image={item.image} title={item.title} text={item.text} />)}
            </motion.div>
        </div>
    )
}

export default Value;