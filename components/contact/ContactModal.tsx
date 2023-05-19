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
            <div className={`md:py-8 md:px-2`}>
                <img onClick={closeModal} className='cursor-pointer absolute top-[12%] right-[6rem]' src='/assets/close-menu.png'/>
                <div className='flex justify-around'>
                    <div className='w-[40%] flex md:flex-col justify-center md:pl-12 md:pt-8'>
                        <h1 className='text-6xl md:mb-12'>Let´s take the next step!</h1>
                        <a className='contact-link'><img src='/assets/images/form/form-1.png' className='mr-4'/><p>Hipposoft@gmail.com</p></a>
                        <a className='contact-link'><img src='/assets/images/form/form-2.png' className='mr-4'/><p>+61 414 286 242</p></a>
                        <a className='contact-link'><img src='/assets/images/form/form-3.png' className='mr-4'/><p>Melbourne, Australia</p></a>
                    </div>
                    <div className='w-[45%] bg-[#fff] rounded-xl md:p-4'>
                        <p className='text-[#2E0249] font-semibold md:p-[20px]'>Im interested in...</p> 
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
                            submitButtonLabel={'Send message'}
                            emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/diversity-email'}
                        />
                    </div>
                </div>
            </div>
            <div className='dialog-bg'/>
        </Dialog>
    )
}

export default ContactModal;