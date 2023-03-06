import Link from "next/dist/client/link";
import React, { useState } from "react";

interface Props {
  content: React.ReactNode;
  title: string | [];
  link: string;
}

function Accordion({ title, content , link }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <h4
          onClick={() => setIsOpen((prev) => !prev)}
          className={`cursor-pointer text-lg sm:text-2xl lg:text-2xl transition-all duration-300 font-bold bg-gray-100 py-3 px-5 flex justify-between hover:shadow-md
                ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
        >
          {title}
          <span>
            <svg
              className={`h-8 w-8 inline duration-300 transition-transform ${
                isOpen ? "rotate-180" : null
              }`}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </h4>
        <div
          className={`
                ${
                  isOpen
                    ? "max-h-[80rem] duration-500 transition-all ease-in"
                    : "max-h-0 duration-300 transition-all ease-out"
                }
                bg-white shadow-lg w-full rounded-b-lg overflow-hidden`}
        >
          <div className="p-4">{content}   <span className="block mt-3"> <Link href={link} className="text-primary">Read More.</Link> </span></div>
         
        </div>
      </div>
    </>
  );
}

export default Accordion;
