import { motion } from "framer-motion";
import { isLightMode } from "../../../helpers/checkTheme";
import { containerVariants, childVariants } from "../../../Shared/framerVariants";


type Props = {
    title: string;
    subTitle: string;
    customize?: boolean;
}

const SectionTitle = ({title, subTitle, customize}: Props) => {
    // custom styles
    const customStyle = "text-primary font-body-medium text-body-sm";

    const darkTextPrimary = "text-dark-text-primary"; // h1
    const darkTextSecondary = "text-dark-text-secondary";
     
  return (
    <div className="w-full my-10">
          <motion.div className="flex flex-col mx-auto items-center gap-4 md:gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
          >
            <motion.h1 className={`text-3xl  md:text-h1 font-heading-bold ${isLightMode? "": darkTextPrimary}`}
            variants={childVariants}
            
            >{title}</motion.h1>
            <motion.h2 className={`w-auto md:w-9/10 md:max-w-5xl xl:w-7/10 text-lg md:text-section font-heading text-cdark-gray  text-center ${customize? customStyle: ""} ${isLightMode? "": darkTextSecondary} `}
            variants={childVariants}
            >
              {subTitle}
            </motion.h2>
          </motion.div>
        </div>
  )
}

export default SectionTitle