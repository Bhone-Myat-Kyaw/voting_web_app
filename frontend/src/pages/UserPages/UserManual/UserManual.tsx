import React from "react";

type Props = {};

const UserManual = (props: Props) => {
  return (
    <div className="mt-10 ">
      <div className="w-full mb-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-h1 font-heading-bold">User Manual</h1>
          <h2 className="text-section font-heading text-cdark-gray max-w-[800px] text-center">
            A simple, step-by-step guide to get you started with our platform.
            Follow these instructions to navigate through the key features
            seamlessly.
          </h2>
        </div>
      </div>
      <ul className="list-none flex flex-col justify-around items-start max-w-5/6 px-5">
        <li className="mb-10">ahfoowaheofohef</li>
        <li className="mb-10">afahfwehffh</li>
        <li className="mb-10">oahhfohwehfw</li>
        <li className="mb-10">ajhfeohaweofhowe</li>
        <li className="mb-10">ahhhfowefj</li>
      </ul>
    </div>
  );
};

export default UserManual;
