import Image from "next/image";
import React from "react";

const SideMenu = ({sideMenu, closeSideMenu}) => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return(
        <div className={`${ sideMenu ? 'sidemenu sidemenu-open' : 'sidemenu'}`}>
            <Image 
                src={'/assets/logo.png'} 
                alt={'Hipposoft Logo'} 
                width={154} 
                height={60} 
                className="mx-auto" 
            />
            <ul className="text-center md:mt-12">
                <li className="md:my-5"><a href="#us" onClick={closeSideMenu}>BRAND AND DESIGN</a></li>
                <li className="md:my-5"><a href="#us" onClick={closeSideMenu}>WEB DEVELOPMENT</a></li>
                <li className="md:my-5"><a href="#us" onClick={closeSideMenu}>SEO</a></li>
                <li className="md:my-5"><a href="#projects" onClick={closeSideMenu}>PROJECTS</a></li>
                <li className="md:my-5"><a href="#contact" onClick={closeSideMenu}>CONTACT</a></li>
            </ul>
            <div className="flex justify-between items-center md:w-3/4 md:pt-10">
                <p className="date">
                    {formattedDate}
                </p>
                <a href="https://www.instagram.com/thehipposoft/" target="_blank" rel="noreferrer"><img src="/assets/instagram-icon.png"></img></a>
            </div>
        </div>
    )
}

export default SideMenu