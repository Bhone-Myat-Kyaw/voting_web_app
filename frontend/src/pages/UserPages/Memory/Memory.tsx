import {motion} from "framer-motion";
import Accordion from "../../../Components/Utils/Accordion";
import { Element } from "react-scroll";
import { SelectedPage } from "../../../Shared/Types";
import { SectionTitle } from "../../../Components/UserComponents";
import { containerVariants } from "../../../Shared/framerVariants";
// import img_1 from "/src/assets/img_1.png"
import img_1 from "../../../assets/img_1.jpg"
import img_2 from "../../../assets/img_2.jpg"
import img_3 from "../../../assets/img_3.jpg"


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
        <SectionTitle title="Iconic Memorable Moments" subTitle="In an academic year, students are sure to have many ICONIC memorable moments. Students can partake in fun activities like going to other majors' fresher welcome, participating in sports events, or in singing or dancing performances in our CEIT fresher welcome or the whole fresher welcome, and even skipping classes to chill out and hang out with friends. But there's one thing that is a must try every students should look forward to - it's major gathering with your friends." 
        />
        <motion.div className="flex flex-col gap-5 p-4 w-full  md:max-w-5xl md:mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.7}}
        >
          <Accordion
            name={accordionGpName}
            title="CEIT Gathering"
            imgPath={img_1}
          >
             For the 12th batch, we had 2 major gatherings within our first year - one for each semester. For first semester, we went to "Yangon Zoo", KandawGyi lake, Yegu Pumping Station. For second semester, we went to National Races Village, National Museum, "Pyi Thu Yin Pyin" public park. Each gathering event took only a day. Apart from gatherings, the whole CEIT students took an excursion to MWD Media Center under the name of "Industrial Training" too.
          </Accordion>
          <Accordion
            name={accordionGpName}
            title="The Whole Fresher Welcome"
            imgPath={img_2}
          >
            For YTU 12th batch, the whole fresher welcome was held in January 8, 2025. As the name suggests, it's a fresh welcome ceremony which was held in combination with every major instead of a major-specific welcome. Back in the our year, you can participate in singing or dance performances as you wish. Though there have been some policy changes for 13th batch.
          </Accordion>
          <Accordion
            name={accordionGpName}
            title="The Whole Farewell"
            imgPath={img_3}
          >
            The whole farewell, or should I say "The first night party" in YTU history, was held in September 10, 2025. There are food stalls(you can sell snacks with your friends if you wish), singing and dancing performances. Unlike the whole welcome, there was a special event - designed for couples as most students believed. It is "Ballroom dance" - similar to "prom" from movies. But don't worry, even if you are not in a relationship or don't have a dance partner, the students who organized the event will pair you up with someone who are also in need of a partner ;)
          </Accordion>
        </motion.div>
      </motion.div>
    </Element>
      
  );
};

export default Memory;
