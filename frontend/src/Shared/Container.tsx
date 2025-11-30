import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="w-4/5 m-auto pb-10 ">{children}</div>;
};

export default Container;
