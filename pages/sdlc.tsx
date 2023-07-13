import clsx from "clsx";
import React from "react";
import HeroSection2 from "../components/HeroSection2";

import {
  LightBulbIcon,
  ChartPieIcon,
  SparklesIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  ServerStackIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

import img from "../public/sdlcweb.webp"
import Link from "next/link";
import Head from "next/dist/shared/lib/head";
const sdlc = () => {
  const features = [
    {
      name: "Planning",
      description:
        "This stage involves defining the objectives, scope, and requirements of the software project. This includes identifying the stakeholders, defining the user requirements, and creating a project plan",
      icon: LightBulbIcon,
    },
    {
      name: "Analysis",
      description:
        " In this stage, the software development team analyzes the user requirements and identifies the software features and functions that will be needed to meet those requirements. This stage also involves creating functional and technical specifications for the software system.",
      icon: ChartPieIcon,
    },
    {
      name: "Design",
      description:
        "This stage involves creating a detailed design for the software system, including the user interface, database structure, and application architecture. This stage also includes creating a prototype or mockup of the software system.",
      icon: SparklesIcon,
    },
    {
      name: "Development",
      description:
        "This stage involves writing and testing the code for the software system. This includes developing modules or components of the system, testing them, and integrating them into the overall system.",
      icon: PuzzlePieceIcon,
    },
    {
      name: "Testing",
      description:
        "In this stage, the software development team tests the system to ensure that it meets the user requirements and functions correctly. This includes functional testing, performance testing, and security testing.",
      icon: WrenchScrewdriverIcon,
    },
    {
      name: "Deployment",
      description:
        "This stage involves releasing the software system to the users and stakeholders. This may involve installing the software on user systems or deploying it to a cloud-based infrastructure.",
      icon: ServerStackIcon,
    },
    {
      name: "Maintenance",
      description:
        "After the software system is deployed, it may require ongoing maintenance and support. This includes fixing bugs, addressing user issues, and updating the system to meet changing user needs.",
      icon: ComputerDesktopIcon,
    },
  ];

  return (
    <div className="">
       <Head>
        <title>{'Dasksoft - Software Development Life Cycle'}</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/sdlc`}
        />
        {/* OG Tags */}
        <meta property="og:type" content="Home" />
        <meta property="og:title" content={"Dasksoft - Software Development Life Cycle"} />
        <meta property="og:description" content={"Transform your software development process with Dasksoft expert resources in Software Development Life Cycle. Our team of skilled professionals follow a structured approach to ensure that your software project is developed, maintained, and enhanced to meet your specific needs."} />
        <meta property="og:image" content={"../public/sdlcweb.webp"} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/sdlc`}
        />
         {/*Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={"Dasksoft - Software Development Life Cycle"} />
        <meta property="twitter:description" content={'Transform your software development process with Dasksoft expert resources in Software Development Life Cycle. Our team of skilled professionals follow a structured approach to ensure that your software project is developed, maintained, and enhanced to meet your specific needs.'} />
        <meta property="twitter:image" content={"../public/sdlcweb.webp"} />
        <meta
          property="twitter:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/sdlc`}
        />
      </Head>
      <HeroSection2
        title={"Software Development Life Cycle"}
        content={
          "The Systems and Software Development Life Cycle (SDLC) is a methodology used by software developers and engineers to plan, design, develop, test, and deploy software systems. It provides a structured approach to software development that helps ensure the successful delivery of high-quality software that meets the needs of users and stakeholders."
        }
        image={img}
      ></HeroSection2>
      <div className="bg-gray-200">
        <div className="relative max-w-7xl  mx-auto">
          {/* section1 start */}
          <div className="relative py-16 bg-gray-200 overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
              <div
                className="relative h-full text-lg max-w-prose mx-auto"
                aria-hidden="true"
              >
                <svg
                  className="absolute top-12 left-full transform translate-x-32"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                >
                  <defs>
                    <pattern
                      id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                  />
                </svg>
                <svg
                  className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                >
                  <defs>
                    <pattern
                      id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                  />
                </svg>
                <svg
                  className="absolute bottom-12 left-full transform translate-x-32"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                >
                  <defs>
                    <pattern
                      id="d3eb07ae-5182-43e6-857d-35c643af9034"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                  />
                </svg>
              </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <p>
                  The SDLC is typically divided into several stages, each of
                  which corresponds to a specific phase of the software
                  development process. The stages of the SDLC may vary depending
                  on the specific methodology used, but the basic stages are:
                </p>

                <div className="mt-10">
                  <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-10 h-fit">
                    <ul className="flex flex-col gap-1 overflow-hidden mb-8 ">
                      {features.map((delItem, idx: number) => (
                        <div className="relative w-full" key={delItem.name}>
                          <li
                            data-aos-duration="1500"
                            data-aos={idx % 2 ? "fade-left" : "fade-right"}
                            className={clsx(
                              " md:flex m d:flex-row md:items-start md:gap-4 relative",
                              idx % 2
                                ? "md:pl-40 lg:pl-64"
                                : "md:pr-40 lg:pr-64"
                            )}
                          >
                            <div className="relative">
                              <div className="hidden md:block">
                                <delItem.icon
                                  className="h-20 w-20 md:h-10 md:w-10 mt-4 text-dark mb-3 mx-auto md:mx-0"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                            <div className="inline ">
                              <p className="text-xl text-primary">
                                {delItem.name}
                              </p>
                              <p className=""> {delItem.description}</p>
                              <div>
                                {idx + 1 == features.length ? (
                                  ""
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    width="256"
                                    height="256"
                                    viewBox="0 0 256 256"
                                    xmlSpace="preserve"
                                    className={`hidden pr-[100px] w-full opacity-20 md:block md:h-10 ${
                                      idx % 2 ? "-scale-x-100" : ""
                                    } `}
                                  >
                                    <defs></defs>
                                    <g
                                      className="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                                      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                                    >
                                      <path
                                        d="M 88.8 61.679 l -14.931 -8.62 l -14.931 -8.62 c -1.599 -0.923 -3.599 0.231 -3.599 2.078 v 10.865 C 30.948 54.397 11.99 33.57 11.99 8.384 c 0 -0.985 -0.799 -1.784 -1.784 -1.784 H 1.784 C 0.799 6.601 0 7.399 0 8.384 c 0 31.804 24.321 58.03 55.341 61.068 v 11.545 c 0 1.847 1.999 3.001 3.599 2.078 l 14.931 -8.62 l 14.931 -8.62 C 90.4 64.911 90.4 62.602 88.8 61.679 z"
                                        className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                                        transform=" matrix(1 0 0 1 0 0) "
                                        stroke-linecap="round"
                                      />
                                    </g>
                                  </svg>
                                )}
                              </div>
                            </div>
                          </li>
                        </div>
                      ))}
                    </ul>
                  </dl>
                  <p>
                    The SDLC provides a framework for software developers and
                    engineers to manage the software development process from
                    start to finish. By following a structured approach,
                    developers can ensure that the software system meets the
                    needs of users and stakeholders and is delivered on time and
                    within budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* section1 ends */}
        </div>
      </div>
      {/* section2 start */}
      <div className="bg-primary">
        <div className="max-w-2xl mx-auto text-center  px-4 py-14 sm:px-6 lg:px-8">
          
          <p className="mt-4 text-lg leading-6 text-white">
          Transform your software development process with Dasksoft expert resources in SDLC. Our team of skilled professionals follows a structured approach to ensure that your software project is developed, maintained, and enhanced to meet your specific needs.
          </p>
          <Link
            href="/#contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Contact Us
          </Link>
          
        </div>
      </div>
      {/* section2 ends */}
    </div>
  );
};

export default sdlc;
