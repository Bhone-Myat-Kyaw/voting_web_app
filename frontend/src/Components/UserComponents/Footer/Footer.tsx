import { isLightMode } from "../../../helpers/checkTheme";

//bg-white bg-dark-bg-surface-2
// <a href="" className={link}>Omelette</a> & <a href="" className={link}>Chocolate</a>
const Footer = () => {
    const bgBorderText = isLightMode? "  rounded-t-3xl border-t-cmedium-gray shadow-2xl text-cextra-dark shadow-2xl" : " border-shadow-dark-border border-dark-border rounded-t-3xl text-dark-text-primary";
    const link = "text-primary"
  return (
    <div className={`w-full py-5 h-2/20 bottom-0 fixed mt-10  text-center ${bgBorderText} backdrop-blur-2xl `}>
        <span>&copy; 2025. All rights reserved.<br/>Coded by <a href="https://github.com/Bhone-Myat-Kyaw" className={link}>Omelette</a> & <a href="https://github.com/Chocolate558" className={link}>Chocolate</a> of CEIT 12th Batch, YTU</span>
    </div>
  )
}

export default Footer