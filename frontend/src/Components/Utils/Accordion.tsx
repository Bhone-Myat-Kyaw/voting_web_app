{
  /* <div id="accordion-card" data-accordion="collapse">
  <h2 id="accordion-card-heading-1">
    <button
      type="button"
      className="flex items-center gap-3 justify-between bg-amber-200 w-full p-5 font-medium text-body rounded-xl shadow-normal hover:bg-clight-blue [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none
            "
      data-accordion-target="#accordion-card-body-1"
    >
      <span>Gathering</span>
      <span>v</span>
    </button>
  </h2>
  <div
    id="accordion-card-body-1"
    className="hidden border border-t-0 p-4 rounded-b-lg shadow-normal "
    aria-labelledby="accordion-card-heading-1"
  >
    <div>Cardbody</div>
  </div>
</div>; */
}

{
  /* <details className="flex flex-col gap-5 ">
  <summary>
    <p>Gathering</p>
  </summary>
  <div className="flex">
    <div className="w-full flex-shrink-0 bg-red-300">
      <img
        src="../../assets/STILLNESS.png"
        alt=""
        className="w-full h-48 rounded-lg object-cover"
      />
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
      inventore dolorem exercitationem vero nisi ex incidunt eligendi nam
      deserunt hic.
    </p>
  </div>
</details>; */
}

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Props = {
  name: string;
  title: string;
  imgPath: string;
  children: React.ReactNode;
};

const Accordion = ({ name, title, children, imgPath }: Props) => {
  const accordionVariants: Variants = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      }
    }
  }
  return (
    <motion.details
      name={name}
      className="group border-b border-gray-200 bg-white rounded-lg "
      variants={accordionVariants}
    >
      <summary className="flex items-center justify-between p-5 font-medium cursor-pointer list-none">
        <span>{title}</span>
        <span className="text-gray-900 dark:text-white">
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
{/* dark:bg-gray-900 dark:border-gray-700 */}
      <div className="p-5 rounded-lg border-t border-gray-200  bg-gray-50 ">
        <div className="w-full flex justify-around bg-red-300n h-52">
          <img src={imgPath} alt="" className="flex-1 w-10 object-fit" />
          <p className="text-gray-500 dark:text-gray-400 flex-2">{children}</p>
        </div>
      </div>
    </motion.details>
  );
};

export default Accordion;
