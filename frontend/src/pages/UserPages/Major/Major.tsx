import { firstSemSubjects, secondSemSubjects } from "../../../Components/UserComponents/Texts/subject";
import TableDataRow from "../../../Components/Utils/TableDataRow";
import { Element } from "react-scroll";
import { SelectedPage } from "../../../Shared/Types";
import { SectionTitle } from "../../../Components/UserComponents";
import { motion } from "framer-motion";
import { isLightMode } from "../../../helpers/checkTheme";
import { containerVariants, childVariants } from "../../../Shared/framerVariants";

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Major = ({setSelectedPage}: Props) => {
    // custom styles 
  const thStyle = "p-4 border-b border-gray-300 bg-blue-gray-50";
  const darkTable = "border-dark-table-border odd:bg-dark-table-row even:bg-dark-table-row-alt text-dark-text-primary";

  return (
    <Element name={SelectedPage.Curriculum}>
        <motion.section
        onViewportEnter={()=>setSelectedPage(SelectedPage.Curriculum)}
        viewport={{once: false, amount: 0.9}}
        >
          
            {/* title */}
            <SectionTitle title="C  E I T" subTitle="Computer Engineering and Information Technology (CEIT) is a multidisciplinary field that integrates computer hardware, software, and information systems to design, build, and manage modern digital solutions. The following tables is what you will learn in your first year of your bachelor degree in CEIT." />

            {/* description */}

            
            <motion.table className={`w-6/10 mx-auto table-auto sm:8/10 md:9/10 md:table-fixed  text-left border border-gray-300 md:max-w-5xl md:mx-auto ${isLightMode? "": darkTable} `}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.8}}
            >
              <motion.thead
              variants={childVariants}
              >
                <tr>
                  <th className={`${thStyle} border-r`}>Code</th>
                  <th className={`${thStyle} border-r`}>First Semester</th>
                  <th className={`${thStyle} border-r`}>Code</th>
                  <th className={`${thStyle}`}>Second Semester</th>
                </tr>
              </motion.thead>
              <motion.tbody
              variants={childVariants}
              >
                {firstSemSubjects.map((item, index) => (
                  <tr key={item.id}>
                    <TableDataRow code={firstSemSubjects[index].code} />
                    <TableDataRow subject={firstSemSubjects[index].subject} />
                    <TableDataRow code={secondSemSubjects[index].code} />
                    <TableDataRow subject={secondSemSubjects[index].subject} />
                  </tr>
                ))}
              </motion.tbody>
            </motion.table>
        </motion.section>
    </Element>
    
  );
};

export default Major;

