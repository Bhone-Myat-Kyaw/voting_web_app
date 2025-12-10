import { Navbar } from "../../Components/UserComponents";
import Container from "../../Shared/Container";
import { Hero, History, Major, UserManual, Memory } from "./";
import { useState } from "react";
import { SelectedPage } from "../../Shared/Types";
import OnBoardingModal from "../../Components/Utils/Modal/OnboardingModal";
import { isLightMode } from "../../helpers/checkTheme";
import Footer from "../../Components/UserComponents/Footer/Footer";
// import { useMediaQuery } from "../../helpers/useMediaQuery";

const MainPage = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
    const [showOnboardingModal, setShowOnboardingModal] = useState<boolean>(()=> {
      return !localStorage.getItem("status");
    });

    const mainBackground = isLightMode ? "bg-cwhite" : "bg-dark-bg-base"
    
    // const isAboveMediumScreen = useMediaQuery("(min-width: 1024px)");
  return (
    <div className={`app w-full ${mainBackground} flex flex-col min-h-screen`}>
      <OnBoardingModal isOpen={showOnboardingModal} setShowOnboardingModal={setShowOnboardingModal} />
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      {/* <main className="grow">
        
      </main> */}
      <Container>
        
        <Hero setSelectedPage={setSelectedPage} />
        
        <History setSelectedPage={setSelectedPage} />
        <Major setSelectedPage={setSelectedPage}  />

        <UserManual setSelectedPage={setSelectedPage} />
        <Memory setSelectedPage={setSelectedPage}/>
        <Footer />
      </Container>
      {/* <Footer/> */}
        
      
    </div>
  );
};

export default MainPage;
