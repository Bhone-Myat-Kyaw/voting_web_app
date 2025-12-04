import { isLightMode } from '../../../helpers/checkTheme';
import type {  Voter } from '../../../Shared/Types';
import axios from 'axios';


type Props = {
    isOpen: boolean;
    setShowModal: (value: boolean) => void;
    candidateName: string | null;
    candidateid: string| null;
    voter:Voter;
    // setCandidateName: (value: boolean)=> void;
    setShowVotedModal: (value: boolean)=> void;
    setVoter: (value: Voter| any)=> void;
    setShowCountdown: (value: boolean)=>void;
}

const ConfirmationModal = ({isOpen, setShowModal, candidateName,setShowVotedModal, candidateid, voter, setVoter, setShowCountdown}: Props) => {
    console.log("candidateid=",candidateid)
    console.log("candidateName=",candidateName)
    // const navigate = useNavigate()
    // if(!isOpen) return null;
    const modalCardStyle = isLightMode ? "bg-white" : "bg-dark-card-bg bg-dark-card-border";
    const modalButtonStyle = `px-4 py-2 bg-primary text-white rounded-3xl shadow-normal flex-1 font-button-bold ${isLightMode ? "":"border-dark-button-secondary-border"}`
    // TODO
    const handleConfirm = async () => {
        console.log("handleConfirm fn from confirmation modal");
        try {
            console.log("handle confirm try block")
            const res = await axios.post(
                `${import.meta.env.VITE_SERVER}/vote/postVote`,
                {
                voterid: voter.id,
                candidateid
                },
                { withCredentials: true }
            );
            console.log(res)

            console.log("res.status=", res.status);
        
            if (res.status === 200) {
                console.log(res);
                if (res.data.message === "Not about time") {
                    console.log("Not about time");
                    setShowModal(false)
                    return setShowCountdown(true)
                } else {
                    setVoter((prev: Voter) => ({ ...prev!, hasvoted: true }));
                    // setShowCountdown(false);
                    setShowModal(false);
                    setShowVotedModal(true);
                    
                }
            }

        } catch (error: any) {
        console.error(error);
        }
    }

    // const handleConfirm = async () => {
    //     // alter database data submit fn
    //     // navigate('/')
    //     try {
    //       console.log("try block")
    //         const res = await axios.post(
    //             `${import.meta.env.VITE_SERVER}/vote/postVote`,
    //             {
    //             voterid: voter.id,
    //             candidateid,
    //             },
    //             { withCredentials: true }
    //         );
    //         // if (res.status === 200) {
    //         //     setVoter(prev => ({ ...prev!, hasvoted: true }));
    //         // }
    //         if (res.status === 200) {
                
    //             console.log("res.status200=",res);
    //             if (res.data.message === "Not about time") {
    //                 console.log("Not about time");
    //                 return setShowCountdown(true);
    //             } else {   
    //                 setVoter(prev => ({ ...prev!, hasvoted: true }));
    //             }
    //         }

    //     } catch (error: any) {
    //         console.error("error from handleVoteClick catch block=",error);
    //     }
    //     // setCandidateName(candidateName); //do this from vote page
    //     setShowModal(false) // current modal disappear
    //     setShowVotedModal(true)// show you've already voted modal
       
    // }

    const handleCancel = () => {
        setShowModal(!isOpen)
    }

    
  return (
     <div className='fixed inset-0 bg-transparent backdrop-blur-md flex items-center justify-center z-50' >
        <div className= {`rounded-xl shadow-light py-7 px-9 w-[25%] min-w-80 ${modalCardStyle} `}>
            <div className='flex flex-col gap-2 mb-5'>
                <h2 className='text-section font-heading text-primary text-center'>ARE YOU SURE?</h2>
                <h2 className={`text-h2 font-heading-bold text-center ${isLightMode ? "" : "text-dark-text-primary"}`}>You've selected<br/><span className='text-gradient-to-r from-purple-600 to-indigo-600 '>{candidateName}</span><br/>for your vote</h2>
                
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