"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button'
import Box from '../box';
import ModalUs from './ModalUs';
import { US_DATA } from './constants';

const Us = () => {    
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedModalDataId, setSelectedModalDataId] = useState<number>(0);
    const [isSecondPageActive, setIsSecondPageActive] = useState<boolean>(false);

    return(
        <div className='background2'>
            <div className='lg:flex justify-between max-w-[1200px] lg:mx-auto py-24' id='us'>
                <div className='flex flex-col lg:w-[28%] mt-8 lg:mt-24 text-center lg:text-left'>
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
                        className='my-3 px-6 md:px-0'>
                            We are a team of passionate people from all over the world.
                            </motion.p>
                        <motion.p 
                        className='my-3 px-6 md:px-0'
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
                        >We are convinced that disruption is the key to success and that is why we are not afraid of challenges. 
                        </motion.p>
                        <motion.p 
                        className='my-3 px-6 md:px-0 mb-6 md:mb-0'
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
                        >We want to accompany you in the process of technological transformation of your business.
                        </motion.p>
                    </div>
                    <motion.div 
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1}}
                        className='md:mt-12'
                    >
                        <Button label='READ MORE' onClick={() => {
                            setSelectedModalDataId(0)
                            setOpenModal(true)}}/>
                    </motion.div>
                </div>
                <motion.div 
                    initial={{
                        opacity: 0,
                        x: 30,
                        }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{duration: 1, delay: 1.7}}
                    className='lg:grid mt-4 lg:mt-0 mx-auto lg:mx-0 grid-cols-2 grid-rows-2'
                >
                    <div className='lg:w-[350px] w-80 mx-auto lg:mx-0 lg:h-[350px]'>
                        <Box 
                            bg='/assets/images/us/us-design.png' 
                            label='BRAND & DESIGN'
                            onClick={() => {
                                setSelectedModalDataId(0)
                                setOpenModal(true)}
                            }
                        />
                    </div>
                    <div className='lg:w-[350px] w-80 mx-auto lg:mx-0 lg:h-[350px]'>
                        <Box 
                            bg='/assets/images/us/us-develop.png' 
                            label='WEB DEVELOPMENT'
                            onClick={() => {
                                setSelectedModalDataId(1)
                                setOpenModal(true)}
                            }
                        />
                    </div>
                    <div className='col-span-2 lg:w-[700px] w-80 mx-auto lg:mx-0 lg:h-[350px]'>
                        <Box 
                            bg='/assets/images/us/us-seo.png'
                            label='SEO'
                            onClick={() => {
                                setSelectedModalDataId(2)
                                setOpenModal(true)}
                            }
                        />
                    </div>                
                </motion.div>

                <ModalUs 
                    open={openModal} 
                    closeModal={() => {
                        setOpenModal(false);
                        setIsSecondPageActive(false);
                    }} 
                    selectedSection={US_DATA[selectedModalDataId].section}
                >
                    <div className={'relative'}>
                        {
                            isSecondPageActive 
                            ? US_DATA[selectedModalDataId].secondPageContent
                            : US_DATA[selectedModalDataId].content
                        }
                        {
                            US_DATA[selectedModalDataId].withPagination && <div className={'absolute md:bottom-[15%] bottom-5 md:left-[40%] left-[80%]'}>
                                {
                                    isSecondPageActive 
                                    ? <div 
                                        onClick={() => setIsSecondPageActive(false)}
                                        className={'text-white text-2xl cursor-pointer'}
                                    >
                                        <img src='/assets/next-arrows.png' className='rotate-180' />
                                    </div>
                                    : <div 
                                        onClick={() => setIsSecondPageActive(true)}
                                        className={'text-white text-2xl cursor-pointer'}
                                    >
                                        <img src='/assets/next-arrows.png'  />
                                    </div> 
                                }
                            </div>
                        }
                    </div>
                </ModalUs>
            </div>
        </div>
    )
}

export default Us;