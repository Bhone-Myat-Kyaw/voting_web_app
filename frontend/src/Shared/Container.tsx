import React from "react";
import { isLightMode } from "../helpers/checkTheme";


type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className={`w-full ${isLightMode? "bg-cwhite": "bg-dark-bg-base"}`} >
      <div className="w-4/5 m-auto pb-10 ">{children}</div>
    </div>
  );
};

export default Container;
