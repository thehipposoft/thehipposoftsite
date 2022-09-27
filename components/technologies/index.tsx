import React from 'react';
import Card from './card';
import { motion } from 'framer-motion';

//Sytles

//Components
import { CARD_DATA } from './constants';

const Technologies = () => {
    return(
        <div className='max-w-[1200px] mx-auto py-4'>
            <div className='flex flex-col items-center text-center md:text-left'>
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
                    className={'text-7xl md:text-8xl'}
                >Our projects
                </motion.h1>
                <motion.p 
                className='md:w-2/4 text-center mb-6 mt-4 md:mt-0'
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
                >A quick look to our lastest projects</motion.p>
            </div>
            <motion.div 
            className='grid md:grid-cols-3 md:gap-4 gap-8 py-6'
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