import { isLightMode } from "../../helpers/checkTheme"

//bg-white bg-dark-bg-surface-2
// <a href="" className={link}>Omelette</a> & <a href="" className={link}>Chocolate</a>
const Footer = () => {
    const bgBorderText = isLightMode? "  rounded-t-3xl border-t-cmedium-gray text-cextra-dark shadow-2xl" : " border-dark-border rounded-t-3xl text-dark-text-primary";
    // const link = "text-primary"
  return (
    <footer className={`w-full py-5 h-2/20  text-center fixed bottom-0  z-50 ${bgBorderText} backdrop-blur-2xl `}>
        <span>&copy; 2025. All rights reserved.<br/>Created by students of CEIT 12th Batch, YTU</span>
    </footer>
  )
}

export default Footer