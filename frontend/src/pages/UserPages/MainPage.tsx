import Navbar from "../../Components/Navbar/Navbar";
import Container from "../../Shared/Container";
import Hero from "./Hero/Hero";
import History from "./History/History";
import Major from "./Major/Major";
import UserManual from "./UserManual/UserManual";
import Memory from "./Memory/Memory";
import { useEffect, useState } from "react";
import { SelectedPage } from "../../Components/Texts/pages";
import OnBoardingModal from "../../Components/Utils/Modal/OnboardingModal";
import { isLightMode } from "../../helpers/checkTheme";

const MainPage = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
    const [showOnboardingModal, setShowOnboardingModal] = useState<boolean>(()=> {
      return !localStorage.getItem("status");
    });

    const mainBackground = isLightMode ? "bg-cwhite" : "bg-dark-bg-base"
  return (
    <div className={`app w-full ${mainBackground}`}>
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
