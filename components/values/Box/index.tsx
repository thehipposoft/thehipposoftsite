import React from 'react';
//
import { motion } from 'framer-motion';


type boxProps = {
    image: string,
    title: string,
    text: string,
};


const Box = ({image, title, text}:boxProps) => {
    return(
        <motion.div 
        className='flex flex-col md:items-start items-center bg-box-color p-8 rounded-3xl transition ease duration-500 hover:-translate-y-4 shadow-md hover:shadow-slate-400'>
            <div className='rounded-xl bg-box-image-color min-h-[80px] min-w-[80px] flex justify-center mb-4'>
                <img src={image} alt='value icon' className='my-0 mx-auto'/>
            </div>
            <h3 className='font-bold'>{title}</h3>
            <p className='w-3/4 pt-2'>{text}</p>
        </motion.div>
    )
}

export default Box;