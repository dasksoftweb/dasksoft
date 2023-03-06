import React from "react";
import HeroSection2 from "../components/HeroSection2";
import {
  BoltIcon,
  CircleStackIcon,
  ComputerDesktopIcon,
  ChartBarSquareIcon
} from "@heroicons/react/24/solid";

import img from "../public/datascienceweb.webp"

const cloudsecurity = () => {
  const features = [
    {
      name: "Data Collection",
      description:
        " This involves gathering data from various sources, including databases, APIs, and other data sources",
     
    },
    {
      name: "Data Cleaning and Preprocessing",
      description:
        "This involves cleaning and transforming the data to remove errors, inconsistencies, and missing values, and preparing the data for analysis.",
     
    },
    {
      name: "Data Exploration and Visualization",
      description:
        "This involves using descriptive statistics, data visualization, and other exploratory techniques to understand the structure and patterns in the data.",
      
    },
    {
      name: "Data Modeling and Analysis",
      description:
        "This involves using statistical and machine learning algorithms to build predictive models, identify patterns, and extract insights from the data.",
      
    },
    {
      name: "Model Evaluation and Deployment",
      description:
        "This involves evaluating the performance of the models and deploying them in production environments to make predictions and inform decision-making.",
     
    },
  ];

  const features2 = [
    {
      name: "Statistical Analysis",
      description:
        "This involves using statistical methods to analyze data and identify patterns, relationships, and trends.",
      icon: BoltIcon,
    },
    {
      name: "Machine Learning",
      description:
        "This involves using algorithms and statistical models to enable machines to learn from data and make predictions or decisions based on that learning.",
      icon: ComputerDesktopIcon,
    },
    {
      name: "Data Mining",
      description:
        "This involves using computational techniques to explore large datasets and identify patterns and relationships.",
      icon: CircleStackIcon,
    },
    {
      name: "Data Visualization",
      description:
        "This involves using graphs, charts, and other visual representations to communicate complex data in a way that is easily understandable.",
      icon: ChartBarSquareIcon,
    },
  ];

  return (
    <div className="">
      <HeroSection2
        title={"Data science"}
        content={
          "Data science is a multidisciplinary field that involves the use of statistical and computational methods to extract insights and knowledge from data. Data science is used to solve complex problems, make data-driven decisions, and drive innovation in a wide range of industries, including finance, healthcare, marketing, and technology."
        }
        image={img}
      ></HeroSection2>
      <div className="bg-gray-200 ">
        <div className="relative max-w-7xl  mx-auto">
          {/* section1 start */}
          <div className="relative pt-10 bg-gray-200 overflow-hidden ">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <h2 className="text-center">
                  The process of data science typically involves the following
                  steps:
                </h2>
              </div>
            </div>
          </div>
          <div className=" p-10">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16 h-fit">
              <ul className="flex flex-col gap-10 overflow-hidden mb-8 ">
                <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 ">
                  {features.map((feature,index) => (
                    <div key={feature.name} className="realtive ">
                      <div className=" absolute text-3xl mt-[-13px]  md:mt-[-6px]  md:text-5xl text-primary/30 font-bold md:font-normal md:font-italic">
                      <span className="ml-[-14px] md:ml-[-17px]">{index+1}</span>
                      </div> 
                      <div className="">
                      <dt>
                        <p className="mt-5 text-lg leading-6 font-medium text-primary">
                          {feature.name}
                        </p>
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        {feature.description}
                      </dd>
                      
                      </div>
                    </div>
                  ))}
                </dl>
              </ul>
            </dl>
            <div className="">
              <h2 className="text-center text-2xl mt-10 mb-10 font-bold">
                Some of the key techniques used in data science include
              </h2>
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features2.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium  text-primary">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="py-7 px-4 text-gray-500">
              Data science is a rapidly growing field that is expected to
              continue to grow in importance as more and more organizations seek
              to leverage data to gain a competitive advantage. As such, data
              scientists and data analysts are in high demand, and many
              universities and training programs are offering courses and
              certifications in data science.
            </p>
          </div>
          {/* section1 ends */}
        </div>
      </div>
      {/* section2 start */}
      <div className="bg-primary ">
        <div className="max-w-2xl mx-auto text-center py-14 px-4  sm:px-6 lg:px-8">
          
          <p className="mt-4 text-lg leading-6 text-white">
          Unlock the power of your data with Dasksoft's expert data science solutions. Our highly skilled data scientists combine cutting-edge technology and specialized expertise to extract meaningful insights from your data. We use advanced analytics, AI, and machine learning to help you make informed decisions and gain a competitive edge.
          </p>
          <a
            href="/#contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Contact Us
          </a>
        </div>
      </div>
      {/* section2 ends */}
    </div>
  );
};

export default cloudsecurity;
