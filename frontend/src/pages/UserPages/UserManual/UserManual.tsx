import { Element } from "react-scroll";
import { SelectedPage } from "../../../Components/Texts/pages";
import SectionTitle from "../../../Components/Texts/SectionTitle";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { isLightMode } from "../../../helpers/checkTheme";
import { containerVariants, childVariants } from "../../../Shared/framerVariants";

type Props = {
  setSelectedPage : (value: SelectedPage)=>void;
}

const UserManual = ({setSelectedPage}: Props) => {
  // const containerVariants: Variants = {
  //   hidden: {opacity: 0, y:40},
  //   visible: {opacity: 1, y: 0,
  //     transition: {
  //       staggerChildren: 0.4
  //     }
  //   }
  // }

  // const listVariants: Variants = {
  //   hidden: {opacity: 0, y: 40},
  //   visible: {opacity: 1, y: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: "easeInOut",
  //     }
  //   }
  // }

  const darkListStyle = "text-dark-text-primary"
  return (
    <Element name={SelectedPage.UserManual}>
      <motion.div className="mt-10" 
      onViewportEnter={()=> setSelectedPage(SelectedPage.UserManual)}
      viewport={{once: false, amount: 0.8}}
      >
        <div className="w-full mb-10">
          <SectionTitle title="User Manual" subTitle="A simple, step-by-step guide to get you started with our platform. Follow these instructions to navigate through the key features seamlessly." />
        </div>
        <div className="flex flex-col justify-around  w-full   ">
          <motion.ul className={`list-none text-start w-full  md:max-w-5xl md:mx-auto ${isLightMode? "": darkListStyle} `}  
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.8}}
          >
            <motion.li className="mb-10 xl:pl-10"
            variants={childVariants}
            >ahfoowaheofohef</motion.li>
            <motion.li className="mb-10 xl:pl-10"
            variants={childVariants}
            >afahfwehffh</motion.li>
            <motion.li className="mb-10 xl:pl-10"
            variants={childVariants}
            >oahhfohwehfw</motion.li>
            <motion.li className="mb-10 xl:pl-10"
            variants={childVariants}
            >ajhfeohaweofhowe</motion.li>
            <motion.li className="mb-10 xl:pl-10"
            variants={childVariants}
            >ahhhfowefj</motion.li>
          </motion.ul>
        </div>
        
      </motion.div>
    </Element>

  );
};

export default UserManual;
