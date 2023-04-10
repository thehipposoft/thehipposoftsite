import React from "react";
import { PROYECTS_DATA } from './constants';
import ProyectsCarousel from "./ProyectsCarousel";
import { motion } from 'framer-motion';


const Proyects = () => {
    return(
        <div className='max-w-[1250px] mx-auto py-12'>
            <div className='flex flex-col items-center text-center md:text-left'>
                <motion.h1
                    initial={{
                        opacity: 0,
                        x: -70,
                        }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{duration: 1, delay: .8}}
                    className={'text-7xl md:text-8xl'}
                >
                    Our projects
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
                    transition={{duration: 1, delay: 1.5}}
                >
                    A quick look to our lastest projects
                </motion.p>
            </div>
            <motion.div
                initial={{
                opacity: 0,
                y: 70,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 2}}
            >
                <ProyectsCarousel proyects={PROYECTS_DATA}/>
            </motion.div>
        </div>
    )
}

export default Proyects