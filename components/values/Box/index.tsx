import React from 'react';
//
import { motion } from 'framer-motion';


type boxProps = {
    image: string,
    title: string,
    text: string,
    variants: any,
};


const Box = ({image, title, text, variants}:boxProps) => {
    return(
        <motion.div
            className='flex flex-col lg:items-start items-center bg-[#031728] p-8 rounded-3xl box-shadow max-w-[380px] md:w-full mx-auto'
            variants={variants}
            >
            <div className='rounded-xl min-h-[80px] min-w-[80px] flex justify-center mb-4'>
                <img src={image} alt='value icon' className='my-0 mx-auto'/>
            </div>
            <h3 className='font-bold text-base'>{title}</h3>
            <p className='md:w-11/12 pt-2 lg:text-left text-center opacity-60'>{text}</p>
        </motion.div>
    )
}

export default Box;

