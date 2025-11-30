import { Element } from "react-scroll";
import { SelectedPage } from "../../Components/Texts/pages";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import type { People } from "../../Components/Texts/peopleInfo";
import { welcomeTexts, type WelcomeText } from "../../Components/Texts/welcomeText";

type Props = {
  setSelectedPage: (value: SelectedPage)=> void;
}

export default function Hero({setSelectedPage}: Props) {
  // localStorage.clear()
  // framer motion
  const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      }
    }
  };

  const childVariants: Variants = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
  }

  // props from model
  const location = useLocation();
  const personStatus: People = location.state;
  // const [selectedText]: WelcomeText[] = welcomeTexts.filter((item)=> item.status === personStatus);
  let displayText: WelcomeText;

  if(!personStatus) {
    // console.log("If block got executed")
    const defaultText = welcomeTexts[0];
    displayText = defaultText;
  } else {
    // console.log("Else block got executed")
    const selectedText: WelcomeText[] = welcomeTexts.filter((item)=> item.status === personStatus);
    displayText = selectedText[0];
  }

  


  return (
    
    <Element name={SelectedPage.Home}>
      <motion.section className="w-full h-screen flex flex-col items-center justify-center dark:bg-dark-bg-base"
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
      viewport={{once: false, amount: 0.8}}
      

      >
        <motion.div className=" gap-10 mt-5  max-w-3xl text-center flex flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount:0.2}}
        >
          <motion.h1 className="text-5xl font-heading-bold dark:text-dark-text-primary"
          variants={childVariants}
          >{displayText.title}</motion.h1>
          <motion.p className="text-section-lg font-body max-w-3xl dark:text-dark-text-secondary"
          variants={childVariants}
          >
            {displayText.body}
          </motion.p>
        </motion.div>
      </motion.section>
    </Element>
  );
}
