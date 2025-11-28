import Navbar from "../Components/Navbar/Navbar";
import Container from "../Shared/Container";
import Hero from "./Hero/Hero";
import History from "./History/History";
import Major from "./Major/Major";
import UserManual from "./UserManual/UserManual";
import Memory from "./Memory/Memory";
import { useState } from "react";
import { SelectedPage } from "../Components/Texts/pages";

const MainPage = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (
    <div className="app bg-cwhite">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Container>
        <Hero />
        <History />
        <Major />

        <UserManual />
        <Memory />
      </Container>
    </div>
  );
};

export default MainPage;
