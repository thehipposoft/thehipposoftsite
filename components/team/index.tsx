import React from 'react';
//Sytles
import { motion } from 'framer-motion';

//Components


const Team = () => {
    return(
        <div className='sm:h-screen hidden'>
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
        </div>
    )
}

export default Team;