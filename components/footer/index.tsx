import React from 'react';

const Footer = () => {
    return(
        <div>
            <div className='flex justify-around pt-20'>
                <div className='flex md:flex-col'>
                    <img src={'/assets/logo.png'} alt={'Hipposoft Logo'}  />
                    <img src={'/assets/footer-text.png'} alt={'More than softwere'}/>
                </div>
                <div className='flex justify-around md:w-[60%] footer-links'>
                    <ul className='mx-10'>
                        <li className='font-semibold'>About</li>
                        <li className='pt-4'><a href="">GRAPHIC DESING</a></li>
                        <li className='pt-4'><a href="">WEB DESING</a></li>
                        <li className='pt-4'><a href="">SEO / SEM</a></li>
                    </ul>
                    <ul className='mx-10'>
                        <li className='font-semibold'>How</li>
                        <li className='pt-4'><a href="">Discover</a></li>
                        <li className='pt-4'><a href="">Design</a></li>
                        <li className='pt-4'><a href="">Develop</a></li>
                        <li className='pt-4'><a href="">Deploy</a></li>
                        <li className='pt-4'><a href="">Manteinance</a></li>
                    </ul>
                    <ul className='mx-10'>
                        <li className='font-semibold'>Contact</li>
                        <li className='pt-4'><a href="">hipposoft@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <p className='text-center mt-20'>Created by <span className='font-semibold'>HippoSoft</span> | All Right Reserved</p>
        </div>
    )
}

export default Footer;