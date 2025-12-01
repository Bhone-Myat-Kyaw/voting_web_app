import { isLightMode } from "../../helpers/checkTheme";

type Props = {
  year: number;
  title: string;
  about: string;
};

const Card = ({ year, title, about }: Props) => {
  const darkCardStyle = "bg-dark-card-bg bg-dark-card-border";
  const darkTextPrimary = "text-dark-text-primary"; // h1
  const darkTextSecondary = "text-dark-text-secondary"
  const lightCardStyle = "bg-cwhite"

  const cardStyle = isLightMode ? lightCardStyle: darkCardStyle;  
  const textPrimary = isLightMode? "text-cextra-dark-gray" : darkTextPrimary;
  return (
    <div className={`${cardStyle} p-8 w-[450px] rounded-lg  shadow-normal my-3`} >
      <h2 className="text-primary text-body-sm font-heading-bold">{year}</h2>
      <h1 className={`${textPrimary} text-section font-heading-bold`}  >
        {title}
      </h1>
      <p className={`${isLightMode? "": darkTextSecondary}`}>{about}</p>
    </div>
  );
};

export default Card;
