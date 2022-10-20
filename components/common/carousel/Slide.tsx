import React from "react";

const Slide = ({title, text, name, rol}) => {
    return(
        <div className="min-w-full overflow-hidden transition-all duration-300 ease-in z-10 relative p-8">
            <div className="flex justify-around bg-dark-blue mx-16 py-8 rounded-2xl carousel-slide">
                <div className="pt-16">
                    <div className='my-4'>
                        <h3 className="text-3xl">{title}</h3>
                        <p>{text}</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold my-2'>{name}</h3>
                        <p>{rol}</p> 
                    </div>
                </div>
                <img src="/assets/images/team/teamImageMajo.png"/>
            </div>
        </div>
    )
}

export default Slide;