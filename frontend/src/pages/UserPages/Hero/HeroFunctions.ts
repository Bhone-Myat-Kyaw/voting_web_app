import type { People } from "../../../Shared/Types";
import { welcomeTexts } from "../../../Components/UserComponents/Texts/welcomeText";
import type { WelcomeText } from "../../../Shared/Types";



export  const checkPersonStatus = (personStatus:People) => {
    if(!personStatus) { 
      const defaultText = welcomeTexts[0];
      return defaultText;
    } else {
      const selectedText: WelcomeText[] = welcomeTexts.filter((item)=> item.status === personStatus);
      return selectedText[0];
    }
  }