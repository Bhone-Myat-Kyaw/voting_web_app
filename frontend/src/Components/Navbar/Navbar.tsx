import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "/src/assets/logo.png"
import { useMediaQuery } from "../../helpers/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { SelectedPage } from "../Texts/pages";
import CustomLink from "./CustomLink";
import {motion} from "framer-motion"

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

export default function Navbar({selectedPage, setSelectedPage}:Props) {
  const navigate = useNavigate();
  const isAboveMediumScreen = useMediaQuery("(min-width: 1024px)");
  const sliderAnimation = "transition-transform duration-700 ease-in-out"
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    console.log("handle toggle got fired")
    
    setIsToggle(!isToggle)
    console.log("isToggle=",isToggle)
  }


  return (
    <nav>
      <div className=" w-full  fixed top-0 z-30 backdrop-blur-lg  py-5">
        <div className="w-5/6 m-auto flex justify-between items-center">
          {/* left  */}
          <img src={logo} alt="" className="h-14 w-auto"/>
          {/* right */}
          {isAboveMediumScreen ? (<div className="flex justify-between items-center gap-4">
            <ul className="list-none flex justify-around items-center gap-5 font-heading cursor-pointer ">
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
              className="bg-primary text-cwhite py-3 px-5 rounded-2xl font-button-bold text-button cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
              whileTap={{scale: 1.5}}
            >
              Log in
            </motion.button>
          </div>): (
            <motion.button className="bg-primary text-cwhite py-3 px-5 rounded-2xl font-button-bold text-button cursor-pointer shadow-normal backdrop-blur-md"
            onClick={handleToggle}
            whileTap={{scale: 1.5}}
            >
              <Bars3Icon className="h-6 w-6" />
            </motion.button>
          )}
          {!isAboveMediumScreen && (
            <div className={`w-[300px] fixed h-screen right-0 top-0  bottom-0 z-70  rounded-tl-3xl rounded-bl-3xl shadow-normal  bg-cwhite ${sliderAnimation} transform ${isToggle ? "": "translate-x-[300px] "}`}>
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

                  <motion.button className="bg-primary text-cwhite py-3 px-5 rounded-2xl font-button-bold text-button cursor-pointer shadow-normal backdrop-blur-md max-w-[80%]"
                  onClick={()=> navigate('/login')}
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
