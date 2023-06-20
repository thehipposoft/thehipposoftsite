import React from 'react';
import { motion } from 'framer-motion';
import Header from '../header/Header';

const Banner = () => {
    return (
        <div className='relative'>
                <div className={'overlay'}/>
                <Header />
                <video
                    autoPlay
                    muted
                    loop
                    id={'video'}
                    className={'video'}>
                    <source
                        src={'/assets/banner-video.mp4'}
                        type={'video/mp4'}
                    />
                </video>
            <motion.div 
                initial={{opacity: 1}}
                className={'flex flex-col justify-center items-center h-[90vh] overflow-hidden relative text-center md:text-left z-[2] md:pb-16 banner-opacity'}
            >   
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
                    transition={{duration: 1.5, delay: 1}}
                    className={'text-6xl md:text-8xl'}
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
                    transition={{duration: 1.5, delay: 2}}
                    className={'md:w-[470px] w-9/12 md:text-center pt-2'}
                >
                    
                    We communicate. We connect, we are in constant motion. 
                    We don't follow the rules because we come to innovate.
                    We want you to be part of this.
                </motion.p>
            </motion.div>
        </div>

    )
};

export default Banner;
