import React from 'react';
//Components & constants
import { motion, Variants } from 'framer-motion';
import { VALUES_DATA } from './constants';
import Box from './Box';

const Value = () => {

    const parentVariants: Variants = {
        hidden: { opacity: 0, x: 25 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.4,
                duration: 1,
                delay: 1.5,
            } 
        },
    }

    const boxVariants: Variants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
        },
    }

    return(
        <div className='bg-dark-blue'>
            <div className='max-w-[1200px] md:mx-auto py-24 '>
                <div className='flex flex-col items-center text-center md:text-left my-4 md:my-0'>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            x: -75,
                            }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{duration: 1.5, delay: .8}}
                        className={'text-5xl md:text-[80px] py-2 md:py-0'}

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
                        transition={{duration: 1.5, delay: 1.5}} 
                        className='md:mb-8 px-6 md:px-0 py-4 md:py-0'>
                        We create and build digital experiences to boost your business. We want to inspire you
                    </motion.p>
                </div>
                <motion.div 
                    className='grid md:grid-cols-3 grid-cols-1 gap-8 md:mt-16'
                    variants={parentVariants}
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{ once: true }}
                >
                    {
                        VALUES_DATA.map((item, index) => 
                        <Box 
                            image={item.image} 
                            title={item.title} 
                            text={item.text} 
                            variants={boxVariants}
                            key={index}
                         />)
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Value;