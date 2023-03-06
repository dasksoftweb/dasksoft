import clsx from "clsx";
import React from "react";
import HeroSection2 from "../components/HeroSection2";
import img from "../public/cloudcompuweb.webp"
import {
  BoltIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ShareIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

const cloudc = () => {
  const features = [
    {
      name: "Infrastructure as a Service (IaaS)",
      description:
        " IaaS provides users with access to computing infrastructure, such as virtual machines, storage, and networking resources. This allows users to build and run their own applications and services on top of the infrastructure.",
    },
    {
      name: "Platform as a Service (PaaS)",
      description:
        "PaaS provides users with a complete development environment, including tools and frameworks, to build, test, and deploy their applications. Users dont have to worry about managing the underlying infrastructure, as the platform takes care of it.",
    },
    {
      name: "Software as a Service (SaaS)",
      description:
        "SaaS provides users with access to software applications over the internet. The applications are hosted by the cloud provider and can be accessed via a web browser or a specialized software client.",
    },
  ];

  const features2 = [
    {
      name: "Scalability",
      description:
        " Cloud resources can be easily scaled up or down based on user demand. This allows users to handle spikes in traffic without having to invest in additional hardware.",
      icon: BoltIcon,
    },
    {
      name: "Cost-effectiveness",
      description:
        "Cloud computing allows users to pay only for the resources they use, without having to invest in expensive hardware and infrastructure.",
      icon: CurrencyDollarIcon,
    },
    {
      name: "Flexibility",
      description:
        "Cloud computing provides users with the flexibility to access their resources from anywhere, at any time, using any device with an internet connection.",
      icon: ShareIcon,
    },
    {
      name: "Reliability",
      description:
        "Cloud providers typically offer high levels of uptime and reliability, as well as backup and disaster recovery services.",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="">
      <HeroSection2
        title={"Cloud Computing"}
        content={
          "Cloud computing is a technology that enables users to access and use computing resources, such as servers, storage, and software applications, over the internet. It provides a flexible, scalable, and cost-effective way to deliver computing services to individuals and organizations."
        }
        image={img}
      ></HeroSection2>
      <div className="bg-gray-200 ">
        <div className="relative max-w-7xl  mx-auto">
          {/* section1 start */}
          <div className="relative pt-10 bg-gray-200 overflow-hidden ">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <p>
                  Cloud computing is built on a set of interconnected servers,
                  data storage devices, and networking equipment that are
                  located in data centers around the world. Users can access
                  these resources via the internet, either through a web browser
                  or a specialized software application.
                </p>

                <h2 className="text-center">
                  There are several different types of cloud computing services:
                </h2>
              </div>
            </div>
          </div>
          <div className=" p-10">
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt>
                    <p className="mt-5 text-lg leading-6 font-medium text-primary">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                   
                  </dd>
                </div>
              ))}
            </dl>
            <div className="">
              <h2 className="text-center text-2xl mt-10 mb-10 font-bold">
                Cloud computing offers several benefits, including:
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
          </div>
          {/* section1 ends */}
        </div>
      </div>
      {/* section2 start */}
      <div className="bg-primary ">
        <div className="max-w-2xl mx-auto text-center  px-4 py-14 sm:px-6 lg:px-8">
          
          <p className="mt-4 text-lg leading-6 text-white">
          Are you looking to move your business to the cloud? Dasksoft expert resources in Cloud Computing can help you do just that. Our team of professionals will assess your business requirements and guide you through the process of selecting the right cloud services that best suit your needs.
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

export default cloudc;
