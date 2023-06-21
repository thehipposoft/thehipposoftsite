import React from "react";

type Props = {
    title: string,
    text: string,
    name: string,
    rol: string,
}

const Slide = ({
    title, 
    text, 
    name, 
    rol
}:Props) => {
    return(
        <div className="min-w-[40%] overflow-hidden transition-all duration-300 ease-in z-10 relative p-8">
            <div className="flex justify-around bg-dark-blue mx-4 py-4 rounded-2xl carousel-slide">
                <div className="text-center">
                    <div className='my-4'>
                        <h3 className="text-3xl">{title}</h3>
                        <p>{text}</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold my-2'>{name}</h3>
                        <p>{rol}</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide;