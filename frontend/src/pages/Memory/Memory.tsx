import React from "react";
import Accordion from "../../Components/Utils/accordion";

const Memory = () => {
  const accordionGpName = "memory";
  return (
    <div className="mt-10 mb-10">
      <div className="w-full mb-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-h1 font-heading-bold">Memorable Moments</h1>
          <h2 className="text-section font-heading text-cdark-gray max-w-[800px] text-center">
            A simple, step-by-step guide to get you started with our platform.
            Follow these instructions to navigate through the key features
            seamlessly.
          </h2>
        </div>
      </div>
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
  );
};

export default Memory;
