import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button'
import Box from '../box';
import ModalUs from './ModalUs';
import { US_DATA } from './constants';

const Us = () => {
    
    const [openModal, setOpenModal] = useState<boolean>(false);

    const [selectedModalDataId, setSelectedModalDataId] = useState<number>(0);


    return(
        <div className='flex justify-between max-w-[1200px] md:mx-auto md:my-8 py-4 md:h-screen'>
            <div className='flex flex-col justify-around md:w-3/12 mt-8 text-center md:text-left'>
                <div>
                    <motion.h1 
                        initial={{
                            opacity: 0,
                            x: -50,
                            }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{duration: 1}}
                        className='text-6xl'>
                        This is us
                    </motion.h1>
                    <motion.p 
                    initial={{
                        opacity: 0,
                        y: 50,
                        }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{duration: 1, delay: 0.5}}
                    className='my-3'>
                        We’re a team of passioned people from all over the world.
                        </motion.p>
                    <motion.p 
                    className='my-3'
                    initial={{
                        opacity: 0,
                        y: 50,
                        }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{duration: 1, delay: 0.5}}
                    >We do what we love and we love what we do. </motion.p>
                    <motion.p 
                    className='my-3'
                    initial={{
                        opacity: 0,
                        y: 50,
                        }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{duration: 1, delay: 0.5}}
                    >Our everyday task is to make sure that you are 100% satisfied with the services and products that we provide.</motion.p>
                </div>
                <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    <Button label='READ MORE ABOUT US' onClick={() => {
                        setSelectedModalDataId(0)
                        setOpenModal(true)}}/>
                </motion.div>
            </div>
            <div className='md:grid hidden grid-cols-2'>
                <Box 
                    bg='/assets/images/us/us-design.png' 
                    label='BRAND & DESIGN'
                    onClick={() => {
                        setSelectedModalDataId(0)
                        setOpenModal(true)}
                }
                 />
                <Box 
                    bg='/assets/images/us/us-develop.png' 
                    label='WEB DEVELOPMENT'
                    onClick={() => {
                        setSelectedModalDataId(1)
                        setOpenModal(true)}
                    }
                 />
                <Box 
                    bg='/assets/images/us/us-seo.png'
                    label='SEO'
                    onClick={() => {
                        setSelectedModalDataId(2)
                        setOpenModal(true)}
                    }
                 />
                <Box bg='/assets/images/us/us-design.png' label='BRAND & DESIGN' />
            </div>

            <ModalUs open={openModal} closeModal={() => setOpenModal(false)} selectedSection={US_DATA[selectedModalDataId].section}>
                <div>
                    {US_DATA[selectedModalDataId].content}
                </div>
            </ModalUs>
        </div>
    )
}

export default Us;