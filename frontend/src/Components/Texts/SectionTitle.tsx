import React from 'react'

type Props = {
    title: string;
    subTitle: string;
    customize?: boolean;
}

const SectionTitle = ({title, subTitle, customize}: Props) => {
    const customStyle = "text-primary font-body-medium text-body-sm";
  return (
    <div className="w-full my-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-h1 font-heading-bold">{title}</h1>
            <h2 className={`text-section font-heading text-cdark-gray max-w-[800px] text-center ${customize? customStyle: ""}`}>
              {subTitle}
            </h2>
          </div>
        </div>
  )
}

export default SectionTitle