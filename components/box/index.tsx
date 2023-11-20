import React from "react";
import Image from "next/image";

type gridProps = {
    bg: string,
    label: string,
    onClick?: any,
}

const Box = ({bg, label, onClick}:gridProps) => {
    return(
        <div
            className="flex items-end us-box mx-auto lg:mx-0 relative my-5 lg:my-0 "
            onClick={onClick}
        >
            <Image
                src={bg}
                className="lg:h-[350px] h-[200px] w-full"
                width={400}
                height={350}
                alt={`Box image`}
            />
            <div className="us-box-tag md:absolute flex items-center bottom-8">
                <span className="us-box-tag-line"/>
                <h3>{label}</h3>
            </div>
        </div>
    )
}

export default Box