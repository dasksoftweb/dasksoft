import React from "react";
import HeroSection2 from "../components/HeroSection2";
import {
  WifiIcon,
  InformationCircleIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/solid";
import img from "../public/cybersecuweb.webp"
import Link from "next/link";
import Head from "next/dist/shared/lib/head";
const cybersecurity = () => {
  const features2 = [
    {
      name: "Network Security",
      description:
        "This involves protecting computer networks from unauthorized access and cyber attacks by implementing firewalls, intrusion detection and prevention systems, and other security technologies.",
      icon: WifiIcon,
    },
    {
      name: "Information Security",
      description:
        " This involves protecting sensitive data, such as personal information, financial data, and intellectual property, from unauthorized access, theft, and other cyber threats.",
      icon: InformationCircleIcon,
    },
    {
      name: "Application Security",
      description:
        "This involves securing software applications from cyber attacks by implementing secure coding practices, penetration testing, and other security technologies.",
      icon: CpuChipIcon,
    },
    {
      name: "Endpoint Security",
      description:
        " This involves protecting individual devices, such as computers, laptops, and mobile devices, from cyber attacks by implementing antivirus software, firewalls, and other security technologies.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: "Cloud Security",
      description:
        "This involves protecting data and applications that are stored in cloud-based environments from cyber threats by implementing encryption, access controls, and other security measures.",
      icon: CloudIcon,
    },
    {
      name: " Disaster Recovery and Business Continuity",
      description:
        "This involves protecting data and applications that are stored in cloud-based environments from cyber threats by implementing encryption, access controls, and other security measures.",
      icon: GlobeAltIcon,
    },
  ];

  return (
    <div className="">

      <Head>
        <title>{'Dasksoft - Cyber Security'}</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/cybersecurity`}
        />
        {/* OG Tags */}
        <meta property="og:type" content="Home" />
        <meta property="og:title" content={"Dasksoft - Cyber Security"} />
        <meta property="og:description" content={"Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, theft, damage, and other cyber threats. Cybersecurity is essential for protecting individuals, organizations, and governments from cybercrime, cyber espionage, and cyber terrorism."} />
        <meta property="og:image" content={"../public/cybersecuweb.webp"} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/cybersecurity`}
        />
         {/*Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={"Dasksoft - Cyber Security"} />
        <meta property="twitter:description" content={'Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, theft, damage, and other cyber threats. Cybersecurity is essential for protecting individuals, organizations, and governments from cybercrime, cyber espionage, and cyber terrorism.'} />
        <meta property="twitter:image" content={"../public/cybersecuweb.webp"} />
        <meta
          property="twitter:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/cybersecurity`}
        />
      </Head>
      <HeroSection2
        title={"Cyber Security"}
        content={
          "Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, theft, damage, and other cyber threats. Cybersecurity is essential for protecting individuals, organizations, and governments from cybercrime, cyber espionage, and cyber terrorism."
        }
        image={img}
      ></HeroSection2>
      <div className="bg-gray-200 ">
        <div className="relative max-w-7xl  mx-auto">
          {/* section1 start */}
          <div className="py-10 px-5">
            <p className="py-7 px-7 text-xl text-gray-500">
              Cybersecurity involves a range of practices and technologies that
              work together to protect computer systems and data. Some of the
              key elements of cybersecurity include.
            </p>

            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
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
          {/* section1 ends */}
        </div>
      </div>
      {/* section2 start */}
      <div className="bg-primary ">
        <div className="max-w-2xl mx-auto text-center py-14 px-4  sm:px-6 lg:px-8">

          <p className="mt-4 text-lg leading-6 text-white">
            Protecting your organizations digital assets from cyber attacks is crucial in todays world. Dasksoft expert cyber security team can help you assess and mitigate the risks to your business. Our team of certified professionals can work with you to develop a comprehensive security plan tailored to your specific needs.
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

export default cybersecurity;
