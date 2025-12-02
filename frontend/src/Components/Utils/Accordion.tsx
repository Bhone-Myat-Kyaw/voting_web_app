
import React from "react";
import { motion } from "framer-motion";
import { isLightMode } from "../../helpers/checkTheme";
import { childVariants } from "../../Shared/framerVariants";

type Props = {
  name: string;
  title: string;
  imgPath: string;
  children: React.ReactNode;
};

const Accordion = ({ name, title, children, imgPath }: Props) => {


  // custom styles
  const darkDetails = "bg-dark-card-bg border-dark-card-border";
  const darkTitle = "text-dark-text-primary";
  // const darkIcon = "text-white";
  // const darkCardDiv = "bg-dark-card-bg border-dark-card-border";

  return (
    <motion.details
      name={name}
      open={undefined}
      className={`group border-b  ${isLightMode? "bg-white border-gray-200" : darkDetails} rounded-lg  shadow-normal `}
      variants={childVariants}
    >
      <summary className="flex items-center justify-between p-5 font-medium cursor-pointer list-none">
        <span className={`font-heading ${isLightMode? "": darkTitle}`}>{title}</span>
        <span className="text-gray-900 ">
          <svg
            className="w-3 h-3 text-gray-400 dark:text-gray-500 transform group-open:rotate-180 transition-transform duration-300"
            aria-hidden="true"
            xmlns="www.w3.org"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </span>
      </summary>
      <div className={`p-5 rounded-lg border-t ${isLightMode? "border-gray-200" : "border-dark-card-border"}  `} >
        <div className="w-full flex justify-around bg-red-300n h-52">
          <img src={imgPath} alt="" className="flex-1 w-10 object-fit" />
          <p className="text-gray-500 dark:text-gray-400 flex-2">{children}</p>
        </div>
      </div>
    </motion.details>
  );
};


export default Accordion;
