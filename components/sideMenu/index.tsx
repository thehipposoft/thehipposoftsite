import Image from "next/image";
import React from "react";

const SideMenu = ({sideMenu}) => {
    return(
        <div className={`${ sideMenu ? 'sidemenu sidemenu-open' : 'sidemenu'}`}>
            <Image src={'/assets/logo.png'} alt={'Hipposoft Logo'} width={154} height={60} className="mx-auto" />
            <ul className="text-center">
                <li className="md:my-5">BRAND AND DESIGN</li>
                <li className="md:my-5">WEB DEVELOPMENT</li>
                <li className="md:my-5">SEO</li>
                <li className="md:my-5">PROJECTS</li>
                <li className="md:my-5">CONTACT</li>
            </ul>
        </div>
    )
}

export default SideMenu