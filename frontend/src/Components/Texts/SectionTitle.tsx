import { motion } from "framer-motion";
import type { Variants } from 'framer-motion';

type Props = {
    title: string;
    subTitle: string;
    customize?: boolean;
}

const SectionTitle = ({title, subTitle, customize}: Props) => {
    // custom styles
    const customStyle = "text-primary font-body-medium text-body-sm";
    
    // framer motion
    const containerVariants: Variants = {
      hidden: {opacity: 0},
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.4,
        }
      }
    }

    const childVariants: Variants = {
      hidden: {opacity: 0, y: 40},
      visible: {opacity: 1, y:0,
        transition: {
          duration: 0.4,
          ease: "easeInOut"
        }
      }
    }
  return (
    <div className="w-full my-10">
          <motion.div className="flex flex-col items-center gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.9}}
          >
            <motion.h1 className="text-h1 font-heading-bold"
            variants={childVariants}
            
            >{title}</motion.h1>
            <motion.h2 className={`text-section font-heading text-cdark-gray max-w-[800px] text-center ${customize? customStyle: ""}`}
            variants={childVariants}
            >
              {subTitle}
            </motion.h2>
          </motion.div>
        </div>
  )
}

export default SectionTitle