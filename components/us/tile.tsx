import React from "react";

type TileProps = {
    title: string,
    img1: string,
    img2: string,
    img3: string,
    img4?: string,
    text1: string,
    text2: string,
    text3: string,
    text4?: string,
    change?: any,
}

const Tile = ({
    title, 
    text1, 
    text2, 
    text3, 
    text4, 
    img1, 
    img2, 
    img3, 
    img4, 
    change
}:TileProps) => {
    return(
        <div>
            <h1 className="text-center text-5xl font-[$baloo] my-8">{title}</h1>
                <div className="flex items-center md:mt-4">
                    <img src={img1} alt="" className="bg-[#02223B] p-4 rounded-lg rounded-l-none min-w-[85px] max-h-[80px] object-contain"/>
                    <p className="px-4 md:w-[70%]">{text1}</p>
                </div>
                <div className="flex items-center md:mt-4">
                    <img src={img2} alt="" className="bg-[#02223B] p-4 rounded-lg rounded-l-none min-w-[85px] max-h-[80px] object-contain"/>
                    <p className="px-4 md:w-[70%]">{text2}</p>
                </div>
                <div className="flex items-center md:mt-4">
                    <img src={img3} alt="" className="bg-[#02223B] p-4 rounded-lg rounded-l-none min-w-[85px] max-h-[80px] object-contain"/>
                    <p className="px-4 md:w-[70%]">{text3}</p>
                </div>
                <div className={`${img4 ? 'flex items-center md:mt-4' : 'hidden'}`}>
                    <img src={img4} alt="" className="bg-[#02223B] p-4 rounded-lg rounded-l-none min-w-[85px] max-h-[80px] object-contain"/>
                    <p className="pl-4 md:w-[70%]">{text4}</p>
                </div>
            <img 
                className={`${change ? 'block' : 'hidden'}`}
                src="/assets/images/us/modal-change.png"
            />
        </div>
    )
}

export default Tile;