import {  useNavigate } from "react-router-dom";
// import {voters} from "../../Components/Texts/voterInfo";
import Container from "../../../Shared/Container";
// import {Button, Carousel} from "flowbite-react"
import CandidateCarousel from "../../../Components/Utils/CandidateCarousel";
// import CandidateCarousel from "../../Components/Utils/CandidateCarousel1";
// import { candidates } from "../../../Components/Texts/candidatesInfo";
import type {  SelectedCandidate } from "../../../Shared/Types";
import type { Voter } from "../../../Shared/Types";
import { useEffect, useState } from "react";
import Modal from "../../../Components/Utils/Modal/Modal";
import {motion} from "framer-motion"
import ConfirmationModal from "../../../Components/Utils/Modal/ConfirmationModal";
import { isLightMode } from "../../../helpers/checkTheme";
import { containerVariants, childVariants } from "../../../Shared/framerVariants";
import { useUser } from "../../../hooks/useUser";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../../Components/Utils/Loading";
import CountDownModal from "../../../Components/Utils/Modal/CountDownModal";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";

// type Props = {
//     admissionID: string;
// }



const Vote = () => {
    // fetching voterData;
     const { data: voterData, isLoading: voterIsLoading } = useUser();
      const queryClient = useQueryClient();
      const navigate = useNavigate();
    //  console.log("voterData=",voterData);
    

    // fetching candidates data
    const { data: candidates, isLoading } = useQuery({
        queryKey: ['candidates'],
        queryFn: async () => {
        const res = await axios.get(`api/vote/selectCandidates`, { withCredentials: true });
        return res.data.data;
        },
        staleTime: Infinity
    });
    

    // console.log("candidates=",candidates);

    // useStates
    const [voter, setVoter] = useState<Voter | null>(null);
    // const [showModal, setShowModal] = useState(false)
    const [showCountdown, setShowCountdown] = useState<boolean>(false)
    const [candidateName, setCandidateName] = useState<string|null>(null)
    const [showVotedModal, setShowVotedModal] = useState<boolean>(false)
    const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false)
    const [candidateid, setCandidateid] = useState<string| null>(null)




    useEffect(() => {
        if (voterData) setVoter(voterData);
    }, [voterData]);

    async function logoutFunction() {
        console.log("logout fn")
        queryClient.clear();

        try {
        const res = await axios.post(`api/auth/logout`, {}, { withCredentials: true });

        if (res.status == 200) {
            navigate('/');
        }
        } catch (error) {
            console.log(error);
        }
    }


    if (isLoading) {
        return <Loading/>
    }

    if (voterIsLoading) {
        return <Loading/>
    }

    if (!voter) return <Loading/>
    // TODO: alter database hasvoted value

    const maleCandidates: SelectedCandidate[] = [], femaleCandidates: SelectedCandidate[] = [];
    let maleCandidatesCount = 0, femaleCandidatesCount = 0;
  
    candidates.forEach((candidate: any) => {
        if (candidate.students.gender == 'male') {
        maleCandidates.push(candidate);
        maleCandidatesCount++;
        } else {
        femaleCandidates.push(candidate);
        femaleCandidatesCount++;
        }
    });


    // custom styles
    const containerBackground = `${isLightMode? "bg-cwhite":"bg-dark-bg-base"}`;
    const darkTitle = "text-dark-text-primary";
    const darkTextSecondary = "text-dark-text-secondary";
    console.log("voter=",voter) 
    
    // if voter null -> show error page.
    return ( 
    <motion.div className={`w-full h-screen ${containerBackground} py-10 `} 
    variants={containerVariants}
    initial="hidden"
    whileInView={"visible"}
    viewport={{once: true, amount: 0.2}}
    >
        <Container>
            {/* title */}
            <motion.div className="mb-3 flex items-center justify-between " 
            variants={childVariants}
            >
                <div className="md:container">
                    <h1 className={`text-h1-lg font-heading-bold
                    mb-2 ${isLightMode? "": darkTitle}`}>{`${voter?.gender == 'male'? "Queen": "King" }`} Selection 2025</h1>
                    <h2 className={`${isLightMode? "": darkTextSecondary}`}>Cast your vote for 13th batch queen</h2>
                </div>
                
                <button className={`${isLightMode? "shadow-2xl bg-clight-gray hover:bg-gray-50 ": `bg-dark-bg-surface-2`} p-2 cursor-pointer rounded-lg  border border-gray-200 transition-colors shadow-sm flex items-center gap-1 p-3`}
                onClick={logoutFunction}
                >
                    <span className={`${isLightMode? "text-cdark-gray": darkTitle }`}>Logout</span>
                    <ArrowRightEndOnRectangleIcon className={`size-6 sm:size-7 ${isLightMode? "text-cdark-gray": darkTitle} `} />
                </button>
            </motion.div>
            {/* carousel */}
            <motion.div className="h-[400px] sm:h-[500px] lg:h-[600px] mx-auto"
            variants={childVariants}
            >
                
                <CandidateCarousel candidates={voter.gender==="male"? femaleCandidates: maleCandidates  } 
                voter={voter}
                
                
                
                
                setCandidateName={setCandidateName}
                setShowVotedModal={setShowVotedModal}
               
                
                setShowConfirmModal={setShowConfirmModal}
                setCandidateid={setCandidateid}
                />
            </motion.div>


        </Container>

        {showConfirmModal && (
            <ConfirmationModal 
                isOpen={showConfirmModal} 
                setShowModal={setShowConfirmModal} 
                candidateName={candidateName} 
                setShowVotedModal={setShowVotedModal}
                candidateid={candidateid}
                voter={voter}
                setVoter={setVoter}
                setShowCountdown={setShowCountdown}
                />
            )}
        
        {showCountdown && (<CountDownModal setShowCountdown= {setShowCountdown} />)}
        
        {showVotedModal && (<Modal voter={voter} setShowVotedModal={setShowVotedModal} />)}
        
        
        
    </motion.div> 
  )
}

export default Vote