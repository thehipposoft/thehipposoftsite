import Image from 'next/image';
import React from 'react';
//
import { motion } from 'framer-motion';

//

type cardProps = {
    image: string,
    title: string,
    text: string,
    linkTo: string,
    variants: any,
};

const Card = ({image, title, text, linkTo, variants}:cardProps) => {
    return(
        <motion.a
            href={linkTo}
            target={"_blank"}
            rel={'noreferrer'}
            className='flex flex-col items-center card py-4 cursor-pointer'
            style={{
                backgroundImage:  `url(${image})`,
                backgroundSize: 'cover'
            }}
            variants={variants}
        >
            <p className='text-xl pt-6'>{title}</p>
            <p className='card-text opacity-0 duration-500'>{text}</p>
        <div className='bg-dark-blue py-1 px-3 card-button-hover duration-700 ease'>
                <Image
                    src={'/assets/images/technologies/arrowBox.svg'}
                    width={35}
                    height={35}
                    className={'card-image'}
                />
            </div>
        </motion.a>
    )
}

export default Card;