import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getWithExpiry } from '../../helpers/storage';

type Props = {
    hasVoted: boolean;
}

const Modal = ({ hasVoted}: Props) => {
    const navigate = useNavigate()

    if(!hasVoted) return  ;
    console.log("Modal is rendered and hasVoted=",hasVoted)

    const redirectHome = () => navigate('/');
    const voterData = getWithExpiry("voter");

    
  return (
    <div>
        {!!hasVoted && (
         <div className='fixed inset-0 bg-transparent backdrop-blur-2xl flex items-center justify-center z-50' >
        <div className='bg-cwhite rounded-xl shadow-light py-7 px-9 w-[25%] min-w-80 dark:bg-dark-card-bg dark:bg-dark-card-border'>
            <div className='flex flex-col gap-2 mb-5'>
                <h2 className='text-section font-heading text-primary text-center'>{voterData?.name}</h2>
                <h2 className='text-h2 font-heading-bold text-center text-dark-text-primary'>You've already voted</h2>
                <p className='text-body font-body-medium text-cmedium-gray text-center dark:text-dark-text-secondary'>Your vote has been successfully collected. Thanks for participation.</p>
            </div>
            

            <button onClick={redirectHome} className='px-4 py-2 bg-primary text-white rounded-3xl w-full font-button-bold dark:border-dark-button-secondary-border'>OK</button>

        </div>
    </div>
    )}
    </div>
    
   
  )
}

export default Modal