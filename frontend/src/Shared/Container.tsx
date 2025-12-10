import React from "react";
import { isLightMode } from "../helpers/checkTheme";
import { useMediaQuery } from "../helpers/useMediaQuery";


type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  const isAboveExtraSmallScreen = useMediaQuery("(min-width: 576x)")
  return (
    <div className={`w-full ${isLightMode? "bg-cwhite": "bg-dark-bg-base"}`} >
      {isAboveExtraSmallScreen? (
        <div className="w-4/5 m-auto  ">{children}</div>
      ) :(
        <div className=" m-auto  ">{children}</div>
      )}
      
    </div>
  );
};

export default Container;
