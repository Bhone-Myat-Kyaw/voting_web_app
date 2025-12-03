/*import { useLocation } from "react-router-dom";
// import {voters} from "../../Components/Texts/voterInfo";
import Container from "../../../Shared/Container";
// import {Button, Carousel} from "flowbite-react"
import { CandidateCarousel } from "../../../Components/UserComponents/Utils/CandidateCarousel";
// import CandidateCarousel from "../../Components/Utils/CandidateCarousel1";
//import { candidates } from "../../Components/Texts/candidatesInfo";
//import type { Candidate } from "../../../Components/UserComponents/Texts/candidatesInfo";
import type { voter } from "../../../Components/UserComponents/Texts/voterInfo";
import { useState } from "react";
import Modal from "../../../Components/UserComponents/Utils/Modal";
import {motion} from "framer-motion";
*/
import type { Variants } from "framer-motion";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Container from "../../../Shared/Container";
import { useState, useEffect } from "react";
import { useUser } from "../../../hooks/useUser";
import type { voter } from "../../../Components/UserComponents/Texts/voterInfo";
import CandidateCarousel from "../../../Components/UserComponents/Utils/CandidateCarousel";
import Modal from "../../../Components/UserComponents/Utils/Modal";
import { motion } from "framer-motion";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";


const Vote = () => {
  const { data: voterData, isLoading: voterIsLoading } = useUser();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // framer motion
  const containerVariants: Variants = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, 
      transition: {
        staggerChildren: 0.4,
      }
    }, 
  }

  const childVariants: Variants = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, 
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      }
    }
  }

  const { data: candidates, isLoading } = useQuery({
    queryKey: ['candidates'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER}/vote/selectCandidates`, { withCredentials: true });
      return res.data.data;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const [voter, setVoter] = useState<voter | null>(null);

  useEffect(() => {
    if (voterData) setVoter(voterData);
  }, [voterData]);

  const handleVoteClick = async (candidateid: string) => {
    if (!voter) return alert("User not loaded yet");

    if (voter.hasvoted) return alert("You already voted!");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER}/vote/postVote`,
        {
          voterid: voter.id,
          candidateid
        },
        { withCredentials: true }
      );
      
      if (res.status === 200) {
        console.log(res);
        if (res.data.message === "Not about time") {
          console.log("Not about time");
        } else {
          setVoter(prev => ({ ...prev!, hasvoted: true }));
        }
      }

    } catch (error: any) {
      console.error(error);
    }
  };

  async function logoutFunction() {
    queryClient.clear();

    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER}/auth/logout`, {}, { withCredentials: true });

      if (res.status == 200) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading) {
    return <div className="flex items-center justify-center">Loading...</div>
  }

  if (voterIsLoading) {
    return <div className="flex items-center justify-center">Loading...</div>
  }

  if (!voter) return <div>Loading...</div>


  let maleCandidates: any = [], femaleCandidates: any = [];
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
  
  
  return ( !voter!.hasvoted ?
    <motion.div className="w-full h-screen bg-cwhite py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{once: true, amount: 0.5}}
    >
      <Container>

      <motion.div className="mb-3" variants={childVariants} >
        <div>
          <h1 className="text-h1-lg font-heading-bold mb-2">King & Queen Selection 2025</h1>
          <h2>Cast your vote for next representative</h2>
        </div>

        <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
          <ArrowRightEndOnRectangleIcon className="size-6 sm:size-7 text-cdark-gray" onClick={logoutFunction}/>
        </button>
      </motion.div>

      <motion.div className="h-[400px] sm:h-[500px] lg:h-[600px] mx-auto" variants={childVariants}>
        <CandidateCarousel candidates={voter!.gender==="male"? femaleCandidates: maleCandidates }  onVoteClick={handleVoteClick}  />
      </motion.div>

      </Container>
    </motion.div> : <Modal hasVoted={voter!.hasvoted} />
  )

}

export default Vote