import React from 'react'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'
import { People } from '../Texts/peopleInfo'

type Props = {
    isOpen: boolean;
    setShowOnboardingModal: (value: boolean) => void;
}

const OnBoardingModal = ({isOpen, setShowOnboardingModal}: Props) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const redirectHome = (personStatus: string) => {
        setShowOnboardingModal(false);
        localStorage.setItem("status", personStatus);
        navigate("/", {state: personStatus})
    }
  return (
    <div className='fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-100' >
        <div className='bg-cwhite rounded-3xl shadow-light py-7 px-9 w-[30%] min-w-80 dark:bg-dark-modal-bg  '>
            <div className='flex flex-col gap-5 mb-5'>
                
                <h2 className='text-h2 font-heading-bold text-center dark:text-dark-text-primary'>Select your role to begin.</h2>

                <motion.button onClick={()=>redirectHome(People.Freshmen)} className='px-4 py-2 bg-blue-300 text-blue-700 text-button rounded-3xl w-full font-button-bold hover:text-cwhite hover:bg-button-primary dark:bg-dark-bg-surface-3 capitalize'>{People.Freshmen}</motion.button>
                <motion.button onClick={()=>redirectHome(People.Senior)} className='px-4 py-2 bg-blue-300 text-blue-700 text-button rounded-3xl w-full font-button-bold hover:text-cwhite hover:bg-primary capitalize'>{People.Senior}</motion.button>
                <motion.button onClick={()=>redirectHome(People.Teacher)} className='px-4 py-2 bg-blue-300 text-blue-700 text-button rounded-3xl w-full font-button-bold hover:text-cwhite hover:bg-primary capitalize'>{People.Teacher}</motion.button>
                
            </div>
            

            {/* <button onClick={()=>{}} className='px-4 py-2 bg-primary text-white rounded-3xl w-full font-button-bold'>OK</button> */}

        </div>
    </div>
  )
}

export default OnBoardingModal