import React from 'react';
import Dialog from '@mui/material/Dialog';
import Image from 'next/image';


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
            <div className={`bg-[#7741EA] `}>
                <h3 onClick={closeModal} className='cursor-pointer absolute top-[8%] left-[40%] text-xl font-bold'>X</h3>
                {children}
            </div>
        </Dialog>
    )
}

export default ModalUs;