"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
//Components
import Button from '../common/Button';
import SideMenu from '../sideMenu';
import BackDrop from '../sideMenu/backDrop';

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const toggleSideMenu = () => {
    setSideMenu((prevState) => !prevState);
  };

  return (
    <motion.div
      className={`flex justify-between relative z-10 md:py-7 md:px-14 p-7`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <Link href={'/'}>
        <Image
          src={'/assets/logo.png'}
          alt={'Hipposoft Logo'}
          width={154}
          height={60}
        />
      </Link>

      <div className='flex items-center gap-4'>
        <Link
          className='hidden md:block text-white transition-all after:content-[" "] after:block after:h-[1px] p-2 rounded-3xl after:w-full after:bg-white after:transition-all after:duration-500 after:ease-in-out hover:after:w-0 hover:bg-white hover:text-black hover:font-bold hover:transition-all hover:duration-500 hover:ease-in-out'
          href={'/assets/Services_Hipposoft.pdf'} target='_blank'
        >
          Download brochure
        </Link>

        <Button
          label={'Menu'}
          onClick={toggleSideMenu}
        />
      </div>

      <SideMenu sideMenu={sideMenu} closeSideMenu={toggleSideMenu} />
      <BackDrop sideMenu={sideMenu} closeSideMenu={toggleSideMenu} />
    </motion.div>
  );
};

export default Header;