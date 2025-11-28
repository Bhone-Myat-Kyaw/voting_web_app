import React from "react";

type Props = {
  year: number;
  title: string;
  about: string;
};

const Card = ({ year, title, about }: Props) => {
  return (
    <div className="bg-cwhite p-8 w-[450px] rounded-lg">
      <h2 className="text-primary text-body-sm font-heading-bold">{year}</h2>
      <h1 className="text-cextra-dark-gray text-section font-heading-bold">
        {title}
      </h1>
      <p>{about}</p>
    </div>
  );
};

export default Card;
