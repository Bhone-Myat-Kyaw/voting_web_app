import React from "react";
import {
  firstSemSubjects,
  secondSemSubjects,
} from "../../Components/Texts/subject";
import TableDataRow from "../../Components/Utils/TableDataRow";
import CurriculumTable from "../../Components/Utils/CurriculumTable";
import { Element } from "react-scroll";
import { SelectedPage } from "../../Components/Texts/pages";
import SectionTitle from "../../Components/Texts/SectionTitle";

type Props = {};

const Major = (props: Props) => {
  const thStyle = "p-4 border-b border-gray-300 bg-blue-gray-50";
  const tdStyle = "p-4 border-b border-gray-300";

  return (
    <Element name={SelectedPage.Curriculum}>
        <section>
          {/* title */}
           <SectionTitle customize title="Computer Engineering and Information Technology" subTitle="A brief, engaging paragraph defining the Computer Engineering major, its significance, and the fusion of hardware and software principles that prepares students for the future of technology. This field is at the heart of innovation, powering everything from smartphones to spacecraft." />

          {/* description */}

          <table className="table-auto w-full text-left border border-gray-300">
            <thead>
              <tr>
                <th className={`${thStyle} border-r`}>Code</th>
                <th className={`${thStyle} border-r`}>First Semester</th>
                <th className={`${thStyle} border-r`}>Code</th>
                <th className={`${thStyle}`}>Second Semester</th>
              </tr>
            </thead>
            <tbody>
              {firstSemSubjects.map((item, index) => (
                <tr key={item.id}>
                  <TableDataRow code={firstSemSubjects[index].code} />
                  <TableDataRow subject={firstSemSubjects[index].subject} />
                  <TableDataRow code={secondSemSubjects[index].code} />
                  <TableDataRow subject={secondSemSubjects[index].subject} />
                </tr>
              ))}
            </tbody>
          </table>
        </section>
    </Element>
    
  );
};

export default Major;

