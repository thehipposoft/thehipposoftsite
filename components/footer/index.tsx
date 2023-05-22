import React from 'react';

const Footer = () => {
    return(
        <div>
            <div className='flex flex-col md:flex-row md:justify-around pt-20'>
                <div className='flex flex-col px-4 py-8 md:px-0 md:py-0'>
                    <img src={'/assets/logo.png'} alt={'Hipposoft Logo'} className='md:w-auto w-3/5 md:mx-0 mx-auto' />
                    <img src={'/assets/footer-text.png'} alt={'More than softwere'} className='md:w-auto w-4/5 md:mx-0 mx-auto'/>
                </div>
                <div className='flex flex-col md:flex-row justify-around md:w-[60%] footer-links'>
                    <ul className='mx-10 my-5 md:my-0'>
                        <li className='font-semibold'>About</li>
                        <li className='pt-4'><a href="">GRAPHIC DESING</a></li>
                        <li className='pt-4'><a href="">WEB DESING</a></li>
                        <li className='pt-4'><a href="">SEO / SEM</a></li>
                    </ul>
                    <ul className='mx-10 my-5 md:my-0'>
                        <li className='font-semibold'>How</li>
                        <li className='pt-4'><a href="">Discover</a></li>
                        <li className='pt-4'><a href="">Design</a></li>
                        <li className='pt-4'><a href="">Develop</a></li>
                        <li className='pt-4'><a href="">Deploy</a></li>
                        <li className='pt-4'><a href="">Manteinance</a></li>
                    </ul>
                    <ul className='mx-10 my-5 md:my-0 hidden'>
                        <li className='font-semibold'>Contact</li>
                        <li className='pt-4'><a href="">hipposoft@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <p className='text-center md:mt-20 mt-10 py-8 md:py-0'>Created by <span className='font-semibold'>HippoSoft</span> | All Right Reserved</p>
        </div>
    )
}

export default Footer;