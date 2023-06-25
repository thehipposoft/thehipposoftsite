import React, {useState} from 'react';
//Components
import { motion } from 'framer-motion';
import Button from '../common/Button';
import ContactModal from './ContactModal';

const Contact = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return(
        <div className="bg-dark-blue bottom-fade py-20">
            <div className='max-w-[1200px] m-auto flex flex-col items-center text-center justify-center md:pb-10 pb-4' id='contact'>
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
                    className={'text-7xl md:text-[80px] pt-8'}
                >See you soon!
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
                    className='mb-8'
                >
                    We hope to meet each other very soon.
                    </motion.p>
                <Button label='Contact' onClick={() => {setOpenModal(true)}} />
                <ContactModal open={openModal} closeModal={() => setOpenModal(false)} />
            </div>
        </div>
    )
}

export default Contact;