import React from "react";
import Accordion from "../../Components/Utils/accordion";
import { Element } from "react-scroll";
import { SelectedPage } from "../../Components/Texts/pages";
import SectionTitle from "../../Components/Texts/SectionTitle";


const Memory = () => {
  const accordionGpName = "memory";
  return (
    <Element name={SelectedPage.MemorableMoment}>
      <div className="mt-10 h-[70vh] mb-10">
        <SectionTitle title="Memorable Moments" subTitle="A simple, step-by-step guide to get you started with our platform.Follow these instructions to navigate through the key features
        seamlessly." 
        />
        <div className="flex flex-col gap-5 p-4">
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
        </div>
      </div>
    </Element>
      
  );
};

export default Memory;
