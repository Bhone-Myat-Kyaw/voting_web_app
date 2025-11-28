import React from "react";
import { Element } from "react-scroll";
import { SelectedPage } from "../../Components/Texts/pages";

type Props = {};

export default function Hero({}: Props) {
  return (
    <Element name={SelectedPage.Home}>
      <section className="w-full h-[100vh] flex flex-col items-center justify-center">
        <div className=" gap-10 mt-5  max-w-3xl text-center flex flex-col">
          <h1 className="text-5xl font-heading-bold">Welcome Freshmen!</h1>
          <p className="text-body font-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor id
            nesciunt eum ipsa, dicta quibusdam, excepturi numquam, laboriosam
            voluptate voluptatibus omnis eius fugiat consequuntur a voluptates
            iure provident voluptas aliquid dolorem nam. Totam atque, molestias ad
            itaque enim consequatur cumque deserunt, quidem quasi ea soluta labore
            quam, dolorum iusto maiores?
          </p>
        </div>
      </section>
    </Element>
  );
}
