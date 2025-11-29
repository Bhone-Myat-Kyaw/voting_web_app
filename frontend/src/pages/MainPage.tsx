import Navbar from "../Components/Navbar/Navbar";
import Container from "../Shared/Container";
import Hero from "./Hero/Hero";
import History from "./History/History";
import Major from "./Major/Major";
import UserManual from "./UserManual/UserManual";
import Memory from "./Memory/Memory";
import { useEffect, useState, useLayoutEffect } from "react";
import { SelectedPage } from "../Components/Texts/pages";
import OnBoardingModal from "../Components/Utils/onBoardingModal";

const MainPage = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
    const [showOnboardingModal, setShowOnboardingModal] = useState(false);

    useEffect(()=>{
      const t = setTimeout(()=>{
        setShowOnboardingModal(true);
      },0)
      return () => clearTimeout(t);
    },[]);
  return (
    <div className="app bg-cwhite">
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
