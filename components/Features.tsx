import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";
import Accordion from "./Accordion";

const featureData = [
  {
    title: "Software Development Life Cycle",
    link:"/sdlc",
    content:
      "SDLC is a process followed for a software project development and management. The process involves detailing of a project plan describing how to develop, maintain, replace and alter, or enhance specific software developed during a project. The life cycle defines a methodology for following and improving the quality of software and the overall development process.",
  },
  {
    title: "Cloud Computing",
    link:"/cloudc",
    content:
      "Cloud computing is the on-demand delivery of Information Technology resources over the Internet with pay-as-you-go pricing. With these services businesses no longer need to buy, own, and maintain physical data centers and servers, services such as computing power, storage, and databases can be accessed remotely on an as-needed basis.",
  },
  {
    title: "Cyber Security",
    link:"/cybersecurity",
    content:
      "Cyber security is the application of technologies, processes, and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks, and technologies.",
  },
  {
    title: "Data Science",
    link:"/datascience",
    content:
      "Data science is a study that combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI), and machine learning with specific subject matter expertise to uncover actionable insights hidden in a large data set. These insights guide in decision making and strategic planning.",
  },
];

function Features() {
  const [tab, setTab] = useState(1);

  const tabs = useRef<HTMLDivElement | null>(null);

  const heightFix = () => {
    if (typeof tabs.current !== null && tabs.current?.children[tab]) {
      tabs.current.style.height = // @ts-ignore
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-200 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center text-xl pb-8 md:pb-6">
            <h1 className="h2 mb-4 text-black lg:text-5xl">
              Leading the Business Transformation
            </h1>
            <div className="text-sm lg:text-2xl mb-4">
              through our unmatched Talent Pool
            </div>
            <div className="mt-4 invisible lg:visible md:visible">
              <span
                className="cursor-pointer text-lg hover:border-b-2 hover:border-blue-500"
                onClick={() => setTab(1)}
              >
                SDLC
              </span>{" "}
              |{" "}
              <span
                className="cursor-pointer text-lg hover:border-b-2 hover:border-blue-500"
                onClick={() => setTab(2)}
              >
                Cloud
              </span>{" "}
              |{" "}
              <span
                className="cursor-pointer text-lg hover:border-b-2 hover:border-blue-500"
                onClick={() => setTab(3)}
              >
                Cyber Security
              </span>{" "}
              |{" "}
              <span
                className="cursor-pointer text-lg hover:border-b-2 hover:border-blue-500"
                onClick={() => setTab(4)}
              >
                Data Science
              </span>
            </div>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6 hidden lg:visible">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white text-black shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-primary text-white border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight  mb-1">
                      Software Development Life Cycle
                    </div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white text-black shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-primary text-white border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Cloud Computing
                    </div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white text-black shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-primary text-white border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Cyber Security
                    </div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 4
                      ? "bg-white text-black shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-primary text-white border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(4);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Data Science
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col ">
                    <div className="bg-primary text-lg text-white py-16 px-10 mt-20 shadow-lg rounded-lg backdrop-blur-lg text-left">
                      <p>
                        SDLC is a process followed for a software project,
                        within a software organization. It consists of a
                        detailed plan describing how to develop, maintain,
                        replace and alter or enhance specific software. The life
                        cycle defines a methodology for improving the quality of
                        software and the overall development process.
                      </p>
                      <button className="mt-2 p-2 rounded-md text-base bg-white text-black"><Link href="/sdlc">Read More</Link></button>
                    </div>
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <div className="bg-primary text-lg text-white py-16 px-10 mt-20 shadow-lg rounded-lg backdrop-blur-lg text-left">
                    <p >
                      Cloud computing is the on-demand delivery of Information
                      Technology resources over the Internet with pay-as-you-go
                      pricing. With these services businesses no longer need to
                      buy, own, and maintain physical data centers and servers,
                      services such as computing power, storage, and databases
                      can be accessed remotely on an as-needed basis.
                    </p>
                    <button className="mt-2 p-2 rounded-md text-base bg-white text-black"><Link href="/cloudc">Read More</Link></button>
                  </div>
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <div className="bg-primary text-lg text-white py-16 px-10 mt-20 shadow-lg rounded-lg backdrop-blur-lg text-left">
                    <p >
                      Cyber security is the application of technologies,
                      processes, and controls to protect systems, networks,
                      programs, devices and data from cyber attacks. It aims to
                      reduce the risk of cyber attacks and protect against the
                      unauthorised exploitation of systems, networks, and
                      technologies.
                    </p>
                    <button className="mt-2 p-2 rounded-md text-base bg-white text-black"><Link href="/cybersecurity">Read More</Link></button>
                    </div>
                  </div>
                </Transition>
                {/* Item 4 */}
                <Transition
                  show={tab === 4}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <div className="bg-primary text-lg text-white py-16 px-10 mt-20 shadow-lg rounded-lg backdrop-blur-lg text-left">
                    <p>
                      Data science combines math and statistics, specialized
                      programming, advanced analytics, artificial intelligence
                      (AI), and machine learning with specific subject matter
                      expertise to uncover actionable insights hidden in an
                      organization’s data. These insights can be used to guide
                      decision making and strategic planning.
                    </p>
                    <button className="mt-2 p-2 rounded-md text-base bg-white text-black"><Link href="/datascience">Read More</Link></button>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
          {/* Mobile view Accordian */}
          <div className="md:hidden space-y-4 bg-gray-200 -mt-24 p-5 rounded">
            {featureData.map((val) => (
              <Accordion
                key={val.title}
                title={val.title}
                content={val.content}
                link={val.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
