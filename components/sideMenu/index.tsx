import Image from "next/image";
import React from "react";

const SideMenu = ({sideMenu}) => {
    return(
        <div className={`${ sideMenu ? 'sidemenu sidemenu-open' : 'sidemenu'}`}>
            <Image src={'/assets/logo.png'} alt={'Hipposoft Logo'} width={154} height={60} className="mx-auto" />
            <ul className="text-center md:mt-12">
                <li className="md:my-5"><a href="#us">BRAND AND DESIGN</a></li>
                <li className="md:my-5"><a href="#us">WEB DEVELOPMENT</a></li>
                <li className="md:my-5"><a href="#us">SEO</a></li>
                <li className="md:my-5"><a href="#projects">PROJECTS</a></li>
                <li className="md:my-5"><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
    )
}

export default SideMenu