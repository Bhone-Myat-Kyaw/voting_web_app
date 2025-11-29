import {motion} from "framer-motion";
import type { Variants } from "framer-motion";
import { Element } from "react-scroll";
import Card from "../../Components/Utils/Card";
import { SelectedPage } from "../../Components/Texts/pages";
import SectionTitle from "../../Components/Texts/SectionTitle";import { useMediaQuery } from "../../helpers/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}
const History = ({setSelectedPage}: Props) => {
  // const flexCol = "flex flex-col items-center";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1127px)");
  const schoolHistory = [
    {
      id: 0,
      year: 1985,
      title: "Our Foundation",
      about:
        "A brief sentence about the founding vision and our original location in the heart of the city.",
    },
    {
      id: 1,
      year: 1991,
      title: "First Graduating Class",
      about:
        "A short note on the significance of this first cohort and their achievements.",
    },
    {
      id: 2,
      year: 2003,
      title: "Expanding Our Horizons",
      about:
        "A sentence about the new science wing and what it enabled for our STEM programs.",
    },
    {
      id: 3,
      year: 2015,
      title: "Technology Program Launch",
      about:
        "A sentence about the integration of modern technology and coding in our curriculum.",
    },
    {
      id: 4,
      year: 2025,
      title: "40th Anniversary",
      about:
        "Celebrating four decades of educational excellence and community building.",
    },
  ];

  const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      }
    }
    
  }

  const cardVariants: Variants = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity:1, y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
  }

  return (
    <Element name={SelectedPage.History}>
      <motion.section id="history" className="w-full  gap-10 py-3 mb-16"
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
          viewport={{once: true, amount: 0.3}}
          >
            {isAboveMediumScreen && (
              <div className="col-start-2 w-px bg-gray-[300] rounded-full"></div>
            )}
            

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
                variants={cardVariants}
                >
                  {!isLast ? (
                    <Card year={card.year} title={card.title} about={card.about}/>
                  ) : (
                    <div className="absolute left-1/2 -translate-x-1/2 ">
                      <Card year={card.year} title={card.title} about={card.about}/>
                    </div>
                  ) }

                  {isLast && <div className="h-[250px]"></div>}
                  
                  
                </motion.div>
              )
              
            })}
          </motion.div>

          

          {/* <div className="bg-clight-blue w-px"></div> */}
        </div>
      </motion.section>
    </Element>
  );
};

export default History;
