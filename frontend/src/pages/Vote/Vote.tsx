import { useLocation } from "react-router-dom";
// import {voters} from "../../Components/Texts/voterInfo";
import Container from "../../Shared/Container";
// import {Button, Carousel} from "flowbite-react"
import CandidateCarousel from "../../Components/Utils/CandidateCarousel";
// import CandidateCarousel from "../../Components/Utils/CandidateCarousel1";
import { candidates } from "../../Components/Texts/candidatesInfo";
import type { Candidate } from "../../Components/Texts/candidatesInfo";
import type { voter } from "../../Components/Texts/voterInfo";
import { useState } from "react";
import Modal from "../../Components/Utils/Modal";

// type Props = {
//     admissionID: string;
// }



const Vote = () => {

    // props from login
    const location =useLocation();
    const voterData: voter = location.state;
    const sex = voterData.sex;

    const maleCandidates: Candidate[] = candidates.filter(candidate => (candidate.sex == "male"));
    const femaleCandidates: Candidate[] = candidates.filter(candidate => (candidate.sex == "female"))


    // useEffect(()=>{
    //     return <Modal isOpen={modalOpen} />
    // }, [modalOpen])

    const [voter, setVoter] = useState<voter>(voterData);

    const handleVoteClick = () => {
        setVoter(voter => ({...voter, hasVoted: true}))
    }

    


    
    
  return ( !voter.hasVoted ?
    <div className="w-full h-screen bg-cwhite py-10">
        <Container>
            {/* title */}
            <div className="mb-3" >
                <h1 className="text-h1-lg font-heading-bold
                mb-2">King & Queen Selection 2025</h1>
                <h2>Cast your vote for next representative</h2>
            </div>
            {/* carousel */}
            <div className="h-[400px] sm:h-[500px] lg:h-[600px] mx-auto">
                
                <CandidateCarousel candidates={sex==="male"? femaleCandidates: maleCandidates }  onVoteClick={handleVoteClick}  />
            </div>

        </Container>
        
        
    </div> : <Modal hasVoted={voter.hasVoted} />
  )
}

export default Vote