import React from 'react';
import Image from 'next/image';
//Sytles
import { motion } from 'framer-motion';
//Components
import Button from '../common/Button'

const Us = () => {
    return(
        <div className='flex justify-between max-w-[1200px] m-auto py-4'>
            <div className='flex flex-col justify-around md:w-3/12 mt-8 text-center md:text-left'>
                <div>
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
                        className='text-6xl'>
                        This is us
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
                    className='my-3'>
                        We’re a team of passioned people from all over the world.
                        </motion.p>
                    <motion.p 
                    className='my-3'
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
                    >We do what we love and we love what we do. </motion.p>
                    <motion.p 
                    className='my-3'
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
                    >Our everyday task is to make sure that you are 100% satisfied with the services and products that we provide.</motion.p>
                </div>
                <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    <Button label='READ MORE ABOUT US' />
                </motion.div>
            </div>
            <div className='md:grid hidden grid-cols-2 w-7/12'>
                <Image alt='a' src='/assets/images/us/us-image1.png' width={350} height={350}/>
                <Image alt='a' src='/assets/images/us/us-image2.png' width={350} height={350}/>
                <Image alt='a' src='/assets/images/us/us-image3.png' width={350} height={350}/>
                <Image alt='a' src='/assets/images/us/us-image4.png' width={350} height={350}/>
            </div>
        </div>
    )
}

export default Us;