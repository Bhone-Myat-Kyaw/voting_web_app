import type { People } from "../../../Components/Texts/peopleInfo";
import { welcomeTexts, type WelcomeText } from "../../../Components/Texts/welcomeText";



export  const checkPersonStatus = (personStatus:People) => {
    if(!personStatus) { 
      const defaultText = welcomeTexts[0];
      return defaultText;
    } else {
      const selectedText: WelcomeText[] = welcomeTexts.filter((item)=> item.status === personStatus);
      return selectedText[0];
    }
  }