  const checkMode = (currentMode: string) => {
    console.log("checkMode=",checkMode)
    if(currentMode === "light") {
      return true
    }
    return false
  }

  export const isLightMode = checkMode(localStorage.getItem("theme"));

  // card and carousel import this