import {motion} from "framer-motion";
import Accordion from "../../../Components/Utils/Accordion";
import { Element } from "react-scroll";
import { SelectedPage } from "../../../Shared/Types";
import { SectionTitle } from "../../../Components/UserComponents";
import { containerVariants } from "../../../Shared/framerVariants";
// import img_1 from "/src/assets/img_1.png"
import img_1 from "../../../assets/img_4.jpg"
import img_2 from "../../../assets/img_3.jpg"
import img_3 from "../../../assets/img_2.jpg"


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
            title="The Whole Fresher Welcome"
            imgPath={img_2}
          >
            For YTU 12th batch, the whole fresher welcome was held in January 8, 2025. As the name suggests, it's a fresh welcome ceremony which was held by the combination of every major instead of a major-specific welcome. Back in our year, you can participate in singing or dance performances as you wish. Though we heard that there are some policy changes for 13th batch.
          </Accordion>
          <Accordion
            name={accordionGpName}
            title="The Whole Farewell"
            imgPath={img_3}
          >
            The whole farewell, or should i say "The first night party" in YTU history, was held in September 10, 2025. There are food stalls(you can sell snacks with your friends if you wish), singing and dancing performances. Unlike the whole welcome, there was a special event - designed for couples as most students believed. It is "Ballroom dance". But even if you are not in a relationship or don't have a dance partner, the students who organized the event will pair you up with someone who also don't have a partner ;)
          </Accordion>
        </motion.div>
      </motion.div>
    </Element>
      
  );
};

export default Memory;
