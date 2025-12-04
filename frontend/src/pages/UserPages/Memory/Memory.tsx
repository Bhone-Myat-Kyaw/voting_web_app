import {motion} from "framer-motion";
import Accordion from "../../../Components/Utils/Accordion";
import { Element } from "react-scroll";
import { SelectedPage } from "../../../Shared/Types";
import { SectionTitle } from "../../../Components/UserComponents";
import { containerVariants } from "../../../Shared/framerVariants";
// import img_1 from "/src/assets/img_1.png"
import img_1 from "../../../assets/img_1.jpg"
import img_2 from "../../../assets/img_3.jpg"
import img_3 from "../../../assets/img_4.jpg"


type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Memory = ({setSelectedPage}: Props) => {
  const accordionGpName = "memory";
  
  return (
    <Element name={SelectedPage.MemorableMoment}>
      <motion.div className="mt-10 min-h-[70vh] h-[110vh] mb-20 w-full "
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
            imgPath={img_1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati, alias laboriosam dolorem pariatur assumenda vitae dolores blanditiis nisi? Deserunt obcaecati necessitatibus soluta, iure pariatur, asperiores rem perferendis porro fugiat, delectus ratione suscipit! Laudantium aut obcaecati distinctio beatae officiis debitis.
          </Accordion>
          <Accordion
            name={accordionGpName}
            title="Gathering"
            imgPath={img_2}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati, alias laboriosam dolorem pariatur assumenda vitae dolores blanditiis nisi? Deserunt obcaecati necessitatibus soluta, iure pariatur, asperiores rem perferendis porro fugiat, delectus ratione suscipit! Laudantium aut obcaecati distinctio beatae officiis debitis.
          </Accordion>
          <Accordion
            name={accordionGpName}
            title="Gathering"
            imgPath={img_3}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati, alias laboriosam dolorem pariatur assumenda vitae dolores blanditiis nisi? Deserunt obcaecati necessitatibus soluta, iure pariatur, asperiores rem perferendis porro fugiat, delectus ratione suscipit! Laudantium aut obcaecati distinctio beatae officiis debitis.
          </Accordion>
        </motion.div>
      </motion.div>
    </Element>
      
  );
};

export default Memory;
