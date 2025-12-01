import { useLocation } from "react-router-dom";
// import {voters} from "../../Components/Texts/voterInfo";
import Container from "../../../Shared/Container";
// import {Button, Carousel} from "flowbite-react"
import CandidateCarousel from "../../../Components/Utils/CandidateCarousel";
// import CandidateCarousel from "../../Components/Utils/CandidateCarousel1";
import { candidates } from "../../../Components/Texts/candidatesInfo";
import type { Candidate } from "../../../Components/Texts/candidatesInfo";
import type { Voter } from "../../../Components/Texts/voterInfo";
import { useState } from "react";
import Modal from "../../../Components/Utils/Modal/Modal";
import type { Variants } from "framer-motion";
import {motion} from "framer-motion"
import { getWithExpiry } from "../../../helpers/storage"; 
import { useAuthContext } from "../../../Shared/Context/AuthConstant";
import ConfirmationModal from "../../../Components/Utils/Modal/ConfirmationModal";
import { isLightMode } from "../../../helpers/checkTheme";
import { containerVariants, childVariants } from "../../../Shared/framerVariants";

// type Props = {
//     admissionID: string;
// }



const Vote = () => {
    // authContext 
    
    //   const {confirm, setConfirm} = useAuthContext()

    // framer motion
    // const containerVariants: Variants = {
    //     hidden: {opacity: 0, y: 40},
    //     visible: {opacity: 1, y: 0, 
    //         transition: {
    //             staggerChildren: 0.4,
    //         }
    //     }, 
    // }

    // const childVariants: Variants = {
    //     hidden: {opacity: 0, y: 40},
    //     visible: {opacity: 1, y: 0, 
    //         transition: {
    //             duration: 0.6,
    //             ease: "easeInOut",
    //         }
    //     }
    // }

    // props from login
    // const location =useLocation();
    // const voterData: Voter = location.state;
    // console.log("voterData=",voterData)
    // const sex = voterData.sex;

    // rather than props, retrieve from local storage
    const voterDataParsed = getWithExpiry("voter");
    //================== 
    // TODO: userDataParsed null -> 500 internal server error or something like that
    //===================
    const sex = voterDataParsed?.sex;


    const maleCandidates: Candidate[] = candidates.filter(candidate => (candidate.sex == "male"));
    const femaleCandidates: Candidate[] = candidates.filter(candidate => (candidate.sex == "female"))


    // useEffect(()=>{
    //     return <Modal isOpen={modalOpen} />
    // }, [modalOpen])

    const [voter, setVoter] = useState<Voter | null>(voterDataParsed);

    const [showModal, setShowModal] = useState(false)

    const handleVoteClick = () => {
        // TODO: alter database hasVoted value

        setShowModal(true) 
    }

    

    // custom styles
    const containerBackground = `${isLightMode? "bg-cwhite":"bg-dark-bg-base"}`;
    const darkTitle = "text-dark-text-primary";
    const darkTextSecondary = "text-dark-text-secondary"; 
    
    // if voter null -> show error page.
  return ( !voter.hasVoted ?
    <motion.div className={`w-full h-scree ${containerBackground} py-10 `} 
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
                mb-2 ${isLightMode? "": darkTitle}`}>{`${voter?.sex == 'male'? "Queen": "King" }`} Selection 2025</h1>
                <h2 className={`${isLightMode? "": darkTextSecondary}`}>Cast your vote for 13th batch queen</h2>
            </motion.div>
            {/* carousel */}
            <motion.div className="h-[400px] sm:h-[500px] lg:h-[600px] mx-auto"
            variants={childVariants}
            >
                
                <CandidateCarousel candidates={sex==="male"? femaleCandidates: maleCandidates }  onVoteClick={handleVoteClick}  />
            </motion.div>


        </Container>

        <ConfirmationModal isOpen={showModal} setShowModal={setShowModal} />
        
        
    </motion.div> : <Modal hasVoted={voter.hasVoted} />
  )
}

export default Vote