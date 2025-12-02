import { Element } from "react-scroll";
import { SelectedPage } from "../../../Components/Texts/pages";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import type { People } from "../../../Components/Texts/peopleInfo";
import type {  WelcomeText } from "../../../Components/Texts/welcomeText";
import { isLightMode } from "../../../helpers/checkTheme";
import { containerVariants, childVariants } from "../../../Shared/framerVariants";
import { checkPersonStatus } from "./HeroFunctions";
import { darkTextPrimary, darkTextSecondary } from "./HeroStyles";

type Props = {
  setSelectedPage: (value: SelectedPage)=> void;
}

export default function Hero({setSelectedPage}: Props) {
  // localStorage.removeItem("voter")
  

  // props from model
  const location = useLocation();
  const personStatus: People = location.state;

  const displayText: WelcomeText = checkPersonStatus(personStatus);





  
  

  return (
    
    <Element name={SelectedPage.Home}>
      <motion.section className={`w-full h-screen flex flex-col items-center justify-center bg-transparent
      `}
      
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
      viewport={{once: false, amount: 0.8}}
      

      >
        <motion.div className=" gap-10 mt-5  max-w-3xl text-center flex flex-col"
        // key={theme}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount:0.2}}
        >
          <motion.h1 className={`text-5xl font-heading-bold ${isLightMode? "": darkTextPrimary}`}
          variants={childVariants}
          >{displayText.title}</motion.h1>
          <motion.p className={`text-section-lg font-body max-w-3xl ${isLightMode? "": darkTextSecondary}`}
          variants={childVariants}
          >
            {displayText.body}
          </motion.p>
        </motion.div>
      </motion.section>
    </Element>
  );
}
