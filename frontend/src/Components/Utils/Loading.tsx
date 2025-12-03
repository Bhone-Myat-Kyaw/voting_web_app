import { isLightMode } from "../../helpers/checkTheme"

const mainBackground = isLightMode ? "bg-white" : "bg-dark-bg-base";
const loadingText = isLightMode ? "text-secondary": "text-dark-text-secondary"

const Loading = () => {
  return (
    <div className={`h-screen w-screen  flex justify-center items-center ${mainBackground}`}>
        <div className="flex flex-col items-center gap-5">
            <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-.6s]"></div>
            </div>

            <p className={`${loadingText} font-body text-section`}>Loading...</p>

        </div>
    </div>
  )
}

export default Loading