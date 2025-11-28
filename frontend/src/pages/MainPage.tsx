import Navbar from "../Components/UserComponents/Navbar/Navbar";
import Container from "../Shared/Container";
import Hero from "./UserPages/Hero/Hero";
import History from "./UserPages/History/History";
import Major from "./UserPages/Major/Major";
import UserManual from "./UserPages/UserManual/UserManual";
import Memory from "./UserPages/Memory/Memory";

const MainPage = () => {
  return (
    <div className="app bg-cwhite">
      <Navbar />
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
