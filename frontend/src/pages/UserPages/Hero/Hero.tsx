import { Element } from "react-scroll";
import { SelectedPage } from "../../../Shared/Types";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import type { WelcomeText, People } from "../../../Shared/Types";
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
      <motion.section className={`w-full h-screen flex flex-col items-center text-center justify-center bg-transparent
      `}
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
      viewport={{once: false, amount: 0.8}}
      >
        <motion.div className=" gap-4 md:gap-10 mt-5 max-w-[90%] text-xs lg:max-w-3xl text-center flex flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount:0.2}}
        >
          <motion.h1 className={`text-3xl md:text-5xl text-center font-heading-bold ${isLightMode? "": darkTextPrimary}`}
          variants={childVariants}
          >{displayText.title}</motion.h1>
          <motion.p className={`text-base text-center mx-auto md:text-section-lg font-body lg:max-w-8/10 md:max-w-3xl ${isLightMode? "": darkTextSecondary}`}
          variants={childVariants}
          >
            {displayText.body}
          </motion.p>
        </motion.div>
      </motion.section>
    </Element>
  );
}
