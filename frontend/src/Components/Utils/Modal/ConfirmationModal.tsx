import React from 'react'
import { motion } from "framer-motion";
import { isLightMode } from '../../../helpers/checkTheme';


type Props = {
    isOpen: boolean;
    setShowModal: (value: boolean) => void;
}

const ConfirmationModal = ({isOpen, setShowModal}: Props) => {
    if(!isOpen) return null;
    const modalCardStyle = isLightMode ? "bg-white" : "bg-dark-card-bg bg-dark-card-border";
    const modalButtonStyle = `px-4 py-2 bg-primary text-white rounded-3xl shadow-normal flex-1 font-button-bold ${isLightMode ? "":"border-dark-button-secondary-border"}`
    // TODO
    const handleConfirm = () => {}

    const handleCancel = () => {
        setShowModal(!isOpen)
    }

    
  return (
     <div className='fixed inset-0 bg-transparent backdrop-blur-md flex items-center justify-center z-50' >
        <div className= {`rounded-xl shadow-light py-7 px-9 w-[25%] min-w-80 ${modalCardStyle} `}>
            <div className='flex flex-col gap-2 mb-5'>
                <h2 className='text-section font-heading text-primary text-center'>ARE YOU SURE?</h2>
                <h2 className={`text-h2 font-heading-bold text-center ${isLightMode ? "" : "text-dark-text-primary"}`}>You've selected<br/>name<br/>for your vote</h2>
                
            </div>
            
            <div className='flex w-full gap-3'>
                <button onClick={handleConfirm} className={modalButtonStyle}>Confirm</button>
                <button onClick={handleCancel} className={modalButtonStyle}>Cancel</button>
            </div>
            

        </div>
    </div>
  )
}

export default ConfirmationModal