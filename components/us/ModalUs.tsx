import React from 'react';
import Dialog from '@mui/material/Dialog';

type modalProps = {
    open: boolean,
    children: any,
    closeModal: any,
    selectedSection: string,
}

const ModalUs = (
    {
        open,
        children,
        closeModal,
    }:modalProps) => {
    const handleClose = () => {};
      
    return(
        <Dialog
            onClose={handleClose} 
            open={open} 
            fullWidth={true}
            maxWidth={'lg'}
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: 'transparent',
                  },
            }}
        >
            <div className={'us-modal background'}>
                <img 
                    src='/assets/close-modal.png'
                    onClick={closeModal} 
                    className={'cursor-pointer absolute md:top-[7%] md:left-[40%] left-[80%] top-5 font-bold z-10 text-2xl'}
                >
                </img>
                {children}
            </div>
        </Dialog>
    )
}

export default ModalUs;