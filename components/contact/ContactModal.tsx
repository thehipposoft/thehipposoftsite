import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Form } from '../Form';
import { required, email } from './fieldValidations';

type modalProps = {
    open: boolean,
    closeModal: any,
}

const ContactModal = (
    {
        open,
        closeModal,
    }:modalProps) => {

    const handleClose = () => {};
      
    return(
        <Dialog
            onClose={handleClose} 
            open={open} 
            fullWidth={true}
            maxWidth={'xl'}
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: 'transparent',
                  },
            }}
        >
            <div className={`md:py-8 md:px-2 contact-modal`}>
                <img onClick={closeModal} className='cursor-pointer absolute md:top-[12%] top-[52%] md:right-[6rem] right-[10%]' src='/assets/close-menu.png'/>
                <div className='flex flex-col md:flex-row justify-around'>
                    <div className='md:w-[40%] flex flex-col justify-center md:pl-12 pt-8 pb-12 md:pb-0'>
                        <h1 className='md:text-6xl text-4xl w-3/4 md:w-auto mx-auto md:mx-0 md:p-0 mt-6 md:mt-0'>Let´s take the next step!</h1>
                        <a className='contact-link hidden'><img src='/assets/images/form/form-1.png' className='mr-4 hidden'/><p className='hidden'>Hipposoft@gmail.com</p></a>
                        <a className='contact-link mx-auto md:mx-0'><img src='/assets/images/form/form-2.png' className='mr-4'/><p>+61 414 286 242</p></a>
                        <a className='contact-link'><img src='/assets/images/form/form-3.png' className='mr-4'/><p>Melbourne, Australia</p></a>
                    </div>
                    <div className='md:w-[45%] bg-[#fff] rounded-xl p-4 mt-4 md:mt-0'>
                        <p className='text-[#2E0249] font-semibold md:pt-[20px] md:pl-[20px]'>Im interested in...</p> 
                        <Form 
                            fields={[
                                {
                                    name: 'name',
                                    type: 'text',
                                    label: '',
                                    placeholder: 'Your name',
                                    validations: [required]
                                },
                                {
                                    name: 'customerEmail',
                                    type: 'text',
                                    label: '',
                                    placeholder: 'Your email',
                                    validations: [required, email]
                                },
                                {
                                    name: 'message',
                                    type: 'textArea',
                                    label: '',
                                    placeholder: 'Your message',
                                    validations: [required]
                                },
                            ]}
                            onSuccessMessage={'Your message was sent successfully. We will contact you as soon as possible.'}
                            onErrorMessage={'Please try again in a few minutes.'}
                            submitButtonLabel={'Send message!'}
                            emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/hipposoft-email'}
                        />
                    </div>
                </div>
            </div>
            <div className='dialog-bg'/>
        </Dialog>
    )
}

export default ContactModal;