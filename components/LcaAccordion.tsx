import { RichText } from "@graphcms/rich-text-react-renderer";
import React, { useState } from "react";

function LcaAccordion({ title, content }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <h4
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer flex gap-4 justify-start items-center font-bold mt-4 hover:bg-gray-100 px-4 py-2"
      >
        {title}
        <span
          className={`text-3xl inline duration-300 transition-transform ${
            isOpen ? "rotate-180" : null
          }`}
        >
          {isOpen ? <p>&#8722;</p> : <p>&#43;</p>}
        </span>
      </h4>
      <div
        className={` ${
          isOpen
            ? "h-full duration-500 transition-all ease-in"
            : "max-h-0 duration-300 transition-all ease-out"
        } shadow-lg w-full rounded-b-lg overflow-hidden`}
      >
        <div className="prose prose-teal w-fit">
          <div
            className="px-10 py-8 text-sm md:text-md  text-justify w-full"
            style={{ lineHeight: "2" }}
          >
            <RichText content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LcaAccordion;
