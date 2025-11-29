import {motion} from "framer-motion";
import Accordion from "../../Components/Utils/accordion";
import { Element } from "react-scroll";
import { SelectedPage } from "../../Components/Texts/pages";
import SectionTitle from "../../Components/Texts/SectionTitle";
import type { Variants } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Memory = ({setSelectedPage}: Props) => {
  const accordionGpName = "memory";

  // framer motion
  const containerVariants: Variants = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0,
      transition: {
        staggerChildren: 0.4,
      }
    }
  }
  
  return (
    <Element name={SelectedPage.MemorableMoment}>
      <motion.div className="mt-10 h-[70vh] mb-10 w-full "
      onViewportEnter={()=>setSelectedPage(SelectedPage.MemorableMoment)}
      viewport={{once: false, amount: 0.8}}
      >
        <SectionTitle title="Memorable Moments" subTitle="A simple, step-by-step guide to get you started with our platform.Follow these instructions to navigate through the key features
        seamlessly." 
        />
        <motion.div className="flex flex-col gap-5 p-4 w-full  md:max-w-5xl md:mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.7}}
        >
          <Accordion
            name={accordionGpName}
            title="Gathering"
            imgPath="../../assets/STILLNESS.png"
          >
            Details here
          </Accordion>
          <Accordion
            name={accordionGpName}
            title="Gathering"
            imgPath="../../assets/STILLNESS.png"
          >
            Details here
          </Accordion>
          <Accordion
            name={accordionGpName}
            title="Gathering"
            imgPath="../../assets/STILLNESS.png"
          >
            Details here
          </Accordion>
        </motion.div>
      </motion.div>
    </Element>
      
  );
};

export default Memory;
