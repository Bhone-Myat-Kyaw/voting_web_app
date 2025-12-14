import { Element } from "react-scroll";
import { SelectedPage } from "../../../Shared/Types";
import { SectionTitle } from "../../../Components/UserComponents";
import { motion } from "framer-motion";
import { isLightMode } from "../../../helpers/checkTheme";
import { containerVariants, childVariants } from "../../../Shared/framerVariants";

type Props = {
  setSelectedPage : (value: SelectedPage)=>void;
}

const UserManual = ({setSelectedPage}: Props) => {

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
          <motion.ul className={`list-none  text-start w-7/10 sm:w-9/10  mx-auto  md:max-w-5xl md:mx-auto ${isLightMode? "": darkListStyle} `}  
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.8}}
          >
            <motion.li className="mb-10 xl:pl-10"
            variants={childVariants}
            >
              If you are on mobile, click the toggle button on the navbar to see login button
            </motion.li>
            <motion.li className="mb-10 xl:pl-10"
            variants={childVariants}
            >We will provide you with login credentials the day before the Fresher Welcome Party</motion.li>
            <motion.li className="mb-10 xl:pl-10"
            variants={childVariants}
            >If you are seeing blank page, we request you to refresh the page to see the contents</motion.li>
            <motion.li className="mb-10 xl:pl-10"
            variants={childVariants}
            >Due to the fact that our server being deployed on a free hosting service, some data fetching process might be a bit slow. We humbly request you to wait rather than "clicking" a button multiple times</motion.li>
            <motion.li className="mb-10 xl:pl-10"
            variants={childVariants}
            >Though we've tested with multiple browsers, we strongly recommend chrome or firefox for both android and ios.</motion.li>
          </motion.ul>
        </div>
        
      </motion.div>
    </Element>

  );
};

export default UserManual;
