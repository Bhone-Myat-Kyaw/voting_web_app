import React from "react";
import {
  firstSemSubjects,
  secondSemSubjects,
} from "../../Components/Texts/subject";
import TableDataRow from "../../Components/Utils/TableDataRow";
import CurriculumTable from "../../Components/Utils/CurriculumTable";

type Props = {};

const Major = (props: Props) => {
  const thStyle = "p-4 border-b border-gray-300 bg-blue-gray-50";
  const tdStyle = "p-4 border-b border-gray-300";

  return (
    <section>
      {/* title */}
      <div className="w-full mb-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-h1 font-heading-bold">
            Computer Engineering and Information Technology
          </h1>
          {/* <h2 className="text-section font-heading text-cdark-gray">
          A journey through our most significant milestones.
        </h2> */}

          <p className="text-primary font-body-medium max-w-[800px] text-center">
            A brief, engaging paragraph defining the Computer Engineering major,
            its significance, and the fusion of hardware and software principles
            that prepares students for the future of technology. This field is
            at the heart of innovation, powering everything from smartphones to
            spacecraft.
          </p>
        </div>
      </div>

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
  );
};

export default Major;
