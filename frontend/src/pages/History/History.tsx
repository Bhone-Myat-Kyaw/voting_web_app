import React from "react";
import { Element } from "react-scroll";
import Card from "../../Components/Utils/Card";

const History = () => {
  const flexCol = "flex flex-col items-center";
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

  return (
    <Element name="historyName">
      <section id="history" className="w-full  gap-10 py-3 ">
        <div className="w-full mb-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-h1 font-heading-bold">Our School History</h1>
            <h2 className="text-section font-heading text-cdark-gray">
              A journey through our most significant milestones.
            </h2>
          </div>
        </div>
        {/* TODO: make this div a row and place the content on the left */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-5">
            {schoolHistory.map((item) => (
              <Card
                key={item.id}
                year={item.year}
                title={item.title}
                about={item.about}
              />
            ))}
          </div>

          <div className="bg-clight-blue w-px"></div>
        </div>
      </section>
    </Element>
  );
};

export default History;
