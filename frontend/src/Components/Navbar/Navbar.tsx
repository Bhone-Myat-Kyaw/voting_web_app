import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "/src/assets/logo.png"
import { useMediaQuery } from "../../helpers/useMediaQuery";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { SelectedPage } from "../Texts/pages";
import CustomLink from "./CustomLink";
import {motion} from "framer-motion"
import { voters, type Voter } from "../Texts/voterInfo";
import { useTheme } from "../../helpers/useTheme";
import { isLightMode } from "../../helpers/checkTheme";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

export default function Navbar({selectedPage, setSelectedPage}:Props) {
  // hooks
  const navigate = useNavigate();
  const {theme, toggleTheme} = useTheme()

  // media queries
  const isAboveMediumScreen = useMediaQuery("(min-width: 1024px)");
  const sliderAnimation = "transition-transform duration-700 ease-in-out"

  // slider functionalities
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    console.log("handle toggle got fired")
    
    setIsToggle(!isToggle)
    console.log("isToggle=",isToggle)
  }

  const handleLogin = () => {
    const voterJSON = localStorage.getItem("voter")
    console.log("Voter from loacl storage=",voterJSON)

    if(!voterJSON) {
    
      return navigate('/login')
    }

    const voter: Voter = JSON.parse(voterJSON);
    console.log("Parsed voter=",voter)

    const foundVoter = voters.filter(item=> {
      console.log(`Item${item.id}`,item)
      return item.admissionID === voter.admissionID;
    });
    console.log("foundVoter=", foundVoter);
    // TODO: check with voters from db 
    if(foundVoter) {
      return navigate('/vote', {state: foundVoter[0]})
    }
    
  }

  // custom styles variables
  const themeSwitchButton = `${isLightMode? "bg-clight-gray text-cextra-dark": "bg-dark-bg-surface-1 text-clight-gray" } p-2 rounded-full `;
  const buttonStyle = "bg-primary text-cwhite py-3 px-5 rounded-2xl font-button-bold text-button cursor-pointer shadow-normal backdrop-blur-md hover:bg-blue-400 ";

  const darkTextPrimary = "text-dark-text-primary";


  return (
    <nav>
      <div className={`w-full  fixed top-0 z-30 backdrop-blur-lg  py-5 ${darkTextPrimary} `}>
        <div className="w-5/6 m-auto flex justify-between items-center">
          {/* left  */}
          <img src={logo} alt="" className="h-14 w-auto"/>
          {/* right */}
          {isAboveMediumScreen ? (<div className="flex justify-between items-center gap-4">
            <ul className={`list-none flex justify-around items-center gap-5 font-heading cursor-pointer ${isLightMode? "text-cextra-dark-gray": darkTextPrimary}`}>
              <li>
                <CustomLink page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  
                
                  
              </li>
              <li>
                <CustomLink page="History" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                {/* <Link
                  to="curriculum"
                  smooth={true}
                  duration={100}
                  offset={-100}
                >
                  Curriculum
                </Link> */}
              </li>
              <li>
                <CustomLink page="Curriculum" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                {/* <Link
                  to="usermanual"
                  smooth={true}
                  duration={100}
                  offset={-120}
                >
                  User Manual
                </Link> */}
              </li>
              <li>
                <CustomLink page="User Manual" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                {/* <Link
                  to="memorablemoment"
                  smooth={true}
                  duration={100}
                  offset={-25}
                >
                  Memorable Moments
                </Link> */}
              </li>
              <li>
                <CustomLink page="Memorable Moments" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </li>
            </ul>
            <motion.button
              className={`${buttonStyle} `}
              onClick={handleLogin}
              whileTap={{scale: 1.5}}
            >
              Log in
            </motion.button>
            <button className={`${themeSwitchButton} cursor-pointer shadow-normal`}
            onClick={toggleTheme}
            >
              {theme === "light" ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5 text-white " />}
              
            </button>
          </div>): (
            <motion.button className={buttonStyle}
            onClick={handleToggle}
            whileTap={{scale: 1.5}}
            >
              <Bars3Icon className="h-6 w-6" />
            </motion.button>
          )}
          {!isAboveMediumScreen && (
            <div className={`w-[300px] fixed h-screen right-0 top-0  bottom-0 z-70  rounded-tl-3xl rounded-bl-3xl shadow-normal  ${isLightMode?"bg-cwhite": "bg-dark-bg-surface-3"} ${sliderAnimation} transform ${isToggle ? "": "translate-x-[300px] "}`}>
                <div className="flex flex-col gap-4 pl-10 w-full h-screen">
                  <div className="flex justify-end pt-10 pr-20 mb-6">
                    <motion.button onClick={handleToggle}
                    whileTap={{scale: 1.5}}
                    >
                      <XMarkIcon className="w-6 h-6 right-0"  />
                    </motion.button>
                  </div>
                  <ul className="list-none cursor-pointer flex flex-col gap-10 ">
                    <li>
                      
                        <span className="font-heading text-h2">
                          
                          <CustomLink page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </span>
                      
                    </li>
                    <li>
                      <span className="font-heading text-h2">
                          
                          <CustomLink page="History" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </span>
                    </li>
                    <li>
                      <span className="font-heading text-h2">
                          
                          <CustomLink page="Curriculum" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </span>
                    </li>
                    <li>
                      <span className="font-heading text-h2">
                          
                          <CustomLink page="User Manual" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </span>
                    </li>
                    <li>
                      <span className="font-heading text-h2">
                          
                          <CustomLink page="Memorable Moments" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </span>
                    </li>
                  </ul>

                  <motion.button className={`${buttonStyle}max-w-[80%]`}
                  onClick={handleLogin}
                  whileTap={{scale: 0.9}}
                  whileHover={{scale: 1.1}}
                  >
                    Login
                  </motion.button>

                </div>
            </div>
          )}
          
        </div>
      </div>
    </nav>
  );
}
