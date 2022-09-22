import React from 'react';
import Card from './card';
import { motion } from 'framer-motion';

//Sytles

//Components
import { CARD_DATA } from './constants';

const Technologies = () => {
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
                >Technologies
                </motion.h1>
                <motion.p 
                className='md:w-2/4 text-center'
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
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.</motion.p>
            </div>
            <motion.div 
            className='grid grid-cols-3 gap-4'
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
                {
                    CARD_DATA.map((value, index) => <Card image={value.image} title={value.title} text={value.text}/>)
                }
            </motion.div>
        </div>
    )
}

export default Technologies;