import Image from 'next/image';
import React from 'react';
//

//

type cardProps = {
    image: string,
    title: string,
    text: string,
};

const Card = ({image, title, text}:cardProps) => {
    return(
        <div 
            className='flex flex-col items-center card'
            style={{
                backgroundImage:  `url(${image})`,
                backgroundSize: 'cover'
            }}
        >
            <p className='text-xl py-6'>{title}</p>
            <p className='card-text'>{text}</p>
            <div className='bg-dark-blue py-1 px-3 card-button-hover duration-700 ease'>
                <Image
                    src={'/assets/images/technologies/arrowBox.svg'}
                    width={35}
                    height={35}
                 />
            </div>
        </div>
    )
}

export default Card;