import React from "react";
import { firstSemSubjects, secondSemSubjects } from "../Texts/subject";
import TableDataRow from "./TableDataRow";

type Props = {
  semester: number;
};

const CurriculumTable = ({ semester }: Props) => {
  const thStyle = "p-4 border-b border-gray-300 bg-blue-gray-50";
  return (
    <table className="table-auto w-full text-left border border-gray-300">
      <thead>
        <tr>
          <th className={`${thStyle} border-r`}>Code</th>
          <th className={`${thStyle} border-r`}>
            {semester == 1 ? "First" : "Second"} Semester
          </th>
          <th className={`${thStyle} border-r`}>Code</th>
          <th className={`${thStyle}`}>
            {semester == 1 ? "First" : "Second"} Semester
          </th>
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
  );
};

export default CurriculumTable;
