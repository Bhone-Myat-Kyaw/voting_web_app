import { Navbar } from "../../Components";
import Container from "../../Shared/Container";
import { Hero, History, Major, UserManual, Memory } from "./";
import { useState } from "react";
import { SelectedPage } from "../../Shared/Types";
import OnBoardingModal from "../../Components/Utils/Modal/OnboardingModal";
import { isLightMode } from "../../helpers/checkTheme";
import Footer from "../../Components/Footer/Footer";

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
      <Footer />
    </div>
  );
};

export default MainPage;
