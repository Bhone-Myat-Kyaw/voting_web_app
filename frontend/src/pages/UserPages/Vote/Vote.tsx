import { useLocation } from "react-router-dom";
// import {voters} from "../../Components/Texts/voterInfo";
import Container from "../../../Shared/Container";
// import {Button, Carousel} from "flowbite-react"
import CandidateCarousel from "../../../Components/Utils/CandidateCarousel";
// import CandidateCarousel from "../../Components/Utils/CandidateCarousel1";
// import { candidates } from "../../../Components/Texts/candidatesInfo";
import { candidates, type Candidate } from "../../../Components/Texts/candidatesInfo";
import type { Voter } from "../../../Components/Texts/voterInfo";
import { useEffect, useState } from "react";
import Modal from "../../../Components/Utils/Modal/Modal";
import type { Variants } from "framer-motion";
import {motion} from "framer-motion"
import { getWithExpiry } from "../../../helpers/storage"; 
import { useAuthContext } from "../../../Shared/Context/AuthConstant";
import ConfirmationModal from "../../../Components/Utils/Modal/ConfirmationModal";
import { isLightMode } from "../../../helpers/checkTheme";
import { containerVariants, childVariants } from "../../../Shared/framerVariants";
import { useUser } from "../../../hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// type Props = {
//     admissionID: string;
// }



const Vote = () => {
    // fetching voterData;
    //  const { data: voterData, isLoading: voterIsLoading } = useUser();
    //  console.log(voterData);
    


    // const { data: candidates, isLoading } = useQuery({
    //     queryKey: ['candidates'],
    //     queryFn: async () => {
    //     const res = await axios.get(`${import.meta.env.VITE_SERVER}/vote/selectCandidates`, { withCredentials: true });
    //     return res.data.data;
    //     },
    //     staleTime: Infinity
    // });
    

    console.log("candidates=",candidates);


    const [voter, setVoter] = useState<Voter | null>(null);


    // useEffect(() => {
    //     if (voterData) setVoter(voterData);
    // }, [voterData]);

    const voterLocal = getWithExpiry("voter")






    const [showModal, setShowModal] = useState(false)

    // const handleVoteClick = async (candidateid: number) => {
    //     if (!voter) return alert("User not loaded yet");

    //     if (voter.hasvoted) return alert("You already voted!");

    //     try {
    //         const res = await axios.post(
    //             `${import.meta.env.VITE_SERVER}/vote/postVote`,
    //             {
    //             voterid: voter.id,
    //             candidateid,
    //             },
    //             { withCredentials: true }
    //         );
    //             if (res.status === 200) {
    //                 setVoter(prev => ({ ...prev!, hasvoted: true }));
    //             }

    //         } catch (error: any) {
    //         console.error(error);
    //         }
    //         setShowModal(true) 
    //     };

        // if (isLoading) {
        //     return <div className="flex items-center justify-center">Loading...</div>
        // }

        // if (voterIsLoading) {
        //     return <div className="flex items-center justify-center">Loading...</div>
        // }

        // if (!voter) return <div>Loading...</div>
        // TODO: alter database hasvoted value

        // let maleCandidates: any = [], femaleCandidates: any = [];
        // let maleCandidatesCount = 0, femaleCandidatesCount = 0;
  
        // candidates.forEach((candidate: any) => {
        //     if (candidate.students.gender == 'male') {
        //     maleCandidates.push(candidate);
        //     maleCandidatesCount++;
        //     } else {
        //     femaleCandidates.push(candidate);
        //     femaleCandidatesCount++;
        //     }
        // });

    const maleCandidates: Candidate[] = candidates.filter(candidate => (candidate.sex == "male"));
    const femaleCandidates: Candidate[] = candidates.filter(candidate => (candidate.sex == "female"))

        
    

    


    // custom styles
    const containerBackground = `${isLightMode? "bg-cwhite":"bg-dark-bg-base"}`;
    const darkTitle = "text-dark-text-primary";
    const darkTextSecondary = "text-dark-text-secondary"; 
    
    // if voter null -> show error page.
    return ( !voterLocal?.hasvoted ?
    <motion.div className={`w-full h-screen ${containerBackground} py-10 `} 
    variants={containerVariants}
    initial="hidden"
    whileInView={"visible"}
    viewport={{once: true, amount: 0.2}}
    >
        <Container>
            {/* title */}
            <motion.div className="mb-3 " 
            variants={childVariants}
            >
                <h1 className={`text-h1-lg font-heading-bold
                mb-2 ${isLightMode? "": darkTitle}`}>{`${voter?.gender == 'male'? "Queen": "King" }`} Selection 2025</h1>
                <h2 className={`${isLightMode? "": darkTextSecondary}`}>Cast your vote for 13th batch queen</h2>
            </motion.div>
            {/* carousel */}
            <motion.div className="h-[400px] sm:h-[500px] lg:h-[600px] mx-auto"
            variants={childVariants}
            >
                
                <CandidateCarousel candidates={voterLocal.sex==="male"? femaleCandidates: maleCandidates }  onVoteClick={()=>{}}   />
            </motion.div>


        </Container>

        <ConfirmationModal isOpen={showModal} setShowModal={setShowModal} />
        
        
    </motion.div> : <Modal hasvoted={voter.hasvoted} />
  )
}

export default Vote