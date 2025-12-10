import {motion} from "framer-motion";
import { Element } from "react-scroll";
import Card from "../../../Components/Utils/Card";
import { SelectedPage } from "../../../Shared/Types";
import { SectionTitle } from "../../../Components/UserComponents";
import { useMediaQuery } from "../../../helpers/useMediaQuery";
import { containerVariants, childVariants } from "../../../Shared/framerVariants";
import { schoolHistory } from "./HistoryData";

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}
const History = ({setSelectedPage}: Props) => {
  // const flexCol = "flex flex-col items-center";



  // media query
  const isAboveMediumScreen = useMediaQuery("(min-width: 1127px)");
  




  return (
    <Element name={SelectedPage.History}>
      <motion.section id="history" className="w-full  gap-10 py-3 mb-16 "
      onViewportEnter={()=>setSelectedPage(SelectedPage.History)}
      viewport={{once: false, amount: 0.5}}
      >
        <SectionTitle title="Our School History" subTitle="A journey through our most significant milestones." />
        {/* TODO: make this div a row and place the content on the left */}
        <div className="flex flex-col items-center justify-around  ">

          <motion.div className="grid grid-cols-1 lg:grid-cols-[1fr_4px_1fr] gap-10 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
          >
            {/* {isAboveMediumScreen && (
              <div className="col-start-2 w-px bg-gray-[300] rounded-full"></div>
            )} */}
            

            {schoolHistory.map((card, index) => {
              
              const isLeft = index % 2 === 0; 
              const isLast = index === schoolHistory.length-1 ;
              const leftAndRight = `${isLeft ? "col-start-1 text-left" : "col-start-3 text-left"}`;
              const middle = "col-start-1 col-span-3";

              const desktopScreen = `relative ${isLast ? middle : leftAndRight} `;

              const smToMdScreen = "col-start-1" ;
              
              
              
              return (
                <motion.div key={index}
                className={`${isAboveMediumScreen? desktopScreen: smToMdScreen}`}
                variants={childVariants}
                >
                  {isLast && isAboveMediumScreen ? (
                    <div className="absolute left-1/2 -translate-x-1/2 ">
                      <Card year={card.year} title={card.title} about={card.about}/>
                    </div>
                    
                  ) : (
                    <Card year={card.year} title={card.title} about={card.about}/>
                  ) }

                  {isLast && <div className="h-[250px]"></div>}
                  
                  
                </motion.div>
              )
              
            })}
          </motion.div>

        </div>
      </motion.section>
    </Element>
  );
};

export default History;
