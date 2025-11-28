import { Element } from "react-scroll";
import { SelectedPage } from "../../Components/Texts/pages";
import SectionTitle from "../../Components/Texts/SectionTitle";


const UserManual = () => {
  return (
    <Element name={SelectedPage.UserManual}>
      <div className="mt-10 ">
        <div className="w-full mb-10">
          <SectionTitle title="User Manual" subTitle="A simple, step-by-step guide to get you started with our platform. Follow these instructions to navigate through the key features seamlessly." />
        </div>
        <ul className="list-none flex flex-col justify-around items-start max-w-5/6 px-5">
          <li className="mb-10">ahfoowaheofohef</li>
          <li className="mb-10">afahfwehffh</li>
          <li className="mb-10">oahhfohwehfw</li>
          <li className="mb-10">ajhfeohaweofhowe</li>
          <li className="mb-10">ahhhfowefj</li>
        </ul>
      </div>
    </Element>

  );
};

export default UserManual;
