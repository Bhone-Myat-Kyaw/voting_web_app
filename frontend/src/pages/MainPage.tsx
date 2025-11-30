import Navbar from "../Components/Navbar/Navbar";
import Container from "../Shared/Container";
import Hero from "./Hero/Hero";
import History from "./History/History";
import Major from "./Major/Major";
import UserManual from "./UserManual/UserManual";
import Memory from "./Memory/Memory";
import { useEffect, useState } from "react";
import { SelectedPage } from "../Components/Texts/pages";
import OnBoardingModal from "../Components/Utils/OnBoardingModal";

const MainPage = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
    const [showOnboardingModal, setShowOnboardingModal] = useState<boolean>(()=> {
      return !localStorage.getItem("status");
    });



    // useEffect(()=>{
    //   const t = setTimeout(()=>{
    //     if(localStorage.getItem("status")){
    //       setShowOnboardingModal(false);
    //     } else {
    //       setShowOnboardingModal(true);
    //     }

    //     return () => clearTimeout(t)
    //   },0)
      
    // },[])
    
    //  Display Like An Onboarding Modal
    // useEffect(()=>{
    //   const t = setTimeout(()=>{
    //     setShowOnboardingModal(true);
    //   },0)
    //   return () => clearTimeout(t);
    // },[]);
  return (
    <div className="app bg-cwhite dark:bg-dark-bg-base w-full">
      <OnBoardingModal isOpen={showOnboardingModal} setShowOnboardingModal={setShowOnboardingModal} />
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Container>
        <Hero setSelectedPage={setSelectedPage} />
        <History setSelectedPage={setSelectedPage} />
        <Major setSelectedPage={setSelectedPage}  />

        <UserManual setSelectedPage={setSelectedPage} />
        <Memory setSelectedPage={setSelectedPage}/>
      </Container>
    </div>
  );
};

export default MainPage;
