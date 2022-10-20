import React from 'react';
//Sytles
import { motion } from 'framer-motion';
import Caraousel from '../common/carousel/Carousel';

//Components


const Team = () => {
    return(
        <div className='h-screen '>
            <motion.h1
                className='flex justify-center items-center'
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
            >Our team</motion.h1>
            <div className='overflow-hidden max-w-[1100px] mx-auto rounded-xl'>
                <Caraousel />
            </div>
        </div>
    )
}

export default Team;