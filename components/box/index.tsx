import React from "react";


type gridProps = {
    bg: string,
    label: string,
    onClick?: any,
}

const Box = ({bg, label, onClick}:gridProps) => {
    return(
        <div 
            className="flex items-end us-box relative"
            onClick={onClick}
        >
            <img src={bg} className="md:h-[325px] md:w-full"/>
            <div className="us-box-tag absolute flex items-center bottom-8">
                <span className="us-box-tag-line"/>
                <h3>{label}</h3>
            </div>
        </div>
    )
}

export default Box