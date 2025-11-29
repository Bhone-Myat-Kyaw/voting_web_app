import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
    hasVoted: boolean;
}

const Modal = ({ hasVoted}: Props) => {
    if(!hasVoted) return  ;
    console.log("Modal is rendered and hasVoted=",hasVoted)
    const navigate = useNavigate()

    const redirectHome = () => navigate('/');
    

    
  return (
    <div>
        {!!hasVoted && (
         <div className='fixed inset-0 bg-transparent backdrop-blur-2xl flex items-center justify-center z-50' >
        <div className='bg-cwhite rounded-xl shadow-light py-7 px-9 w-[25%] min-w-80 '>
            <div className='flex flex-col gap-2 mb-5'>
                <h2 className='text-section font-heading text-primary text-center'>name</h2>
                <h2 className='text-h2 font-heading-bold text-center'>You've already voted</h2>
                <p className='text-body font-body-medium text-cmedium-gray text-center'>Your vote has been successfully collected. Thanks for participation.</p>
            </div>
            

            <button onClick={redirectHome} className='px-4 py-2 bg-primary text-white rounded-3xl w-full font-button-bold'>OK</button>

        </div>
    </div>
    )}
    </div>
    
   
  )
}

export default Modal