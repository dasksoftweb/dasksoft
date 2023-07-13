import { gql } from "@apollo/client";
import { RichText } from "@graphcms/rich-text-react-renderer";
import client from "../../apolloClient";
import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Modal from "../../components/Modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import upload from "../../public/assets/upload.png";
import Loader from "../../components/Loader";
import Head from "next/head";

interface formData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  file: null | File;
}

interface IJob {
  jobTitle: string;
  aboutTheCompany: string;
  description: any;
  jobResponsibilities: any;
  projectLocations: string;
  education: string;
  skillsExperience: any;
  slug:string;
}

const Jobs = ({ data}: {data:IJob} ) => {
  const [loading, setLoading] = useState(false);

  const fileTypes = [
    ".msword",
    ".pdf",
    ".rtf",
    ".vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const form = useRef<HTMLFormElement | null>(null);
  const [contactFormData, setContactFormData] = useState<formData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });

  async function handleSubmit() {
    setLoading(true);
    if (typeof form !== null) {
      if (
        !contactFormData.email ||
        !contactFormData.fullName ||
        !contactFormData.message ||
        !contactFormData.phone ||
        !contactFormData.file
      ) {
        setLoading(false);
        toast.error("Please provide all the details!");
        return;
      }

      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          contactFormData.email.toString()
        )
      ) {
        setLoading(false);
        toast.error("Please provide a valid email id.");
        return;
      }
      // Type Check
      const fileType =
        contactFormData.file.type === "audio/x-wav"
          ? ".wav"
          : `.${contactFormData.file.type.replace(/(.*)\//g, "")}`;
      if (!fileTypes.includes(fileType)) {
        setLoading(false);
        toast.error(
          `Invalid File Type. Please attach a .pdf, .doc or a .rtf file.`
        );
        return;
      }
      if (contactFormData?.file?.size > 5000000) {
        setLoading(false);
        toast.error(`File should not be greater than 5MB`);
        return;
      }

      // Uploading the CV to HyGraph assets.

      const form = new FormData();

      form.set("fileUpload", contactFormData.file);

      try {
        const req = await fetch(
          `${process.env.NEXT_PUBLIC_HYGRAPH_URI}/upload`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
            },
            body: form,
          }
        );

        const res = await req.json();

        // Adding a new job application, referencing the ID.

        const { data: hygraphRec } = await client.mutate({
          mutation: gql`
            mutation (
              $jobTitle: String
              $fullName: String
              $email: String
              $phone: String
              $description: String
              $cvId: ID
            ) {
              createJobApplication(
                data: {
                  jobTitle: $jobTitle
                  fullName: $fullName
                  email: $email
                  phone: $phone
                  description: $description
                  cv: { connect: { id: $cvId } }
                }
              ) {
                id
                fullName
                email
                phone
                cv {
                  url
                }
              }
            }
          `,
          variables: {
            jobTitle: `${data.jobTitle}`,
            fullName: `${contactFormData.fullName}`,
            email: `${contactFormData.email}`,
            phone: `${contactFormData.phone}`,
            cvId: `${res.id}`,
            description : `${contactFormData.message}`
          },
        });

        // Passing the data, including the CV URL given by hygraph, to our email API.

        fetch("/api/jobApp", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: data.jobTitle,
            email: contactFormData?.email,
            name: contactFormData?.fullName,
            phone: contactFormData?.phone,
            desc: contactFormData?.message,
            cvUrl: hygraphRec?.createJobApplication.cv.url,
          }),
        });

        setLoading(false);
        toast.success(
          "Your application has been received. We will get back to you as soon as we can.",
          { duration: 5000 }
        );
        setContactFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          file: null,
        });
        setIsOpen(false);
      } catch (err) {
        setLoading(false);
        toast.error("Something went wrong. Please try again later.");
        // console.log(err);
      }
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative pb-2 mt-28">
       <Head>
        <title>{data?.jobTitle}</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/jobs/`}
        />
        {/* OG Tags */}
        <meta property="og:title" content={data?.jobTitle} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/jobs/${data?.slug}`}
        />
        {/* <meta property="og:image" content={data.image.url ?? ""} /> */}
        <meta property="og:type" content="Jobs" />
        <meta property="og:description" content={data.description} />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={data?.jobTitle} />
        <meta property="twitter:description" content={data.description} />
        <meta
          property="twitter:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/jobs/${data.slug}`}
        />
        {/* <meta property="twitter:image" content={data.image.url ?? ""} /> */}
        </Head>
      {loading && <Loader />}
      <div className="" />
      <Toaster />
      <Modal setOpen={setIsOpen} open={isOpen}>
        <div className="mt-5 text-black ">
          <h4 className="text-xl font-bold text-center">
            <span className="block">You are applying for the position of:</span>
            <span className="block">
              {" "}
              <span className="underline underline-offset-2">
                {" "}
                {data?.jobTitle}
              </span>
            </span>
          </h4>
          <form
            encType="multipart/form-data"
            ref={form}
            name="Job_Application"
            className="mt-8 grid grid-cols-1 gap-y-4"
          >
            <div>
              <input
                type="text"
                className="hidden"
                name="Position"
                value={data?.jobTitle}
                onChange={() => null}
              />
              <label htmlFor="full-name" className="">
                Full Name
              </label>
              <input
                value={contactFormData.fullName}
                onChange={(e) =>
                  setContactFormData((prev) => ({
                    ...prev,
                    fullName: e.target.value,
                  }))
                }
                type="text"
                name="Full-Name"
                id="full-name"
                autoComplete="name"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md  border-2"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                value={contactFormData.email}
                onChange={(e) =>
                  setContactFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                id="email"
                name="Email"
                type="email"
                autoComplete="email"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md  border-2"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="">
                Phone
              </label>
              <PhoneInput
                onChange={(v, c, e, phone) => {
                  setContactFormData({
                    ...contactFormData,
                    phone: phone,
                  });
                }}
                inputProps={{
                  name: "phone",
                }}
                value={contactFormData.phone}
                country={"us"}
                inputClass="!w-full py-6 !bg-white !text-black"
                containerClass="!text-black !bg-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="">
                A brief regarding your background and work experience.
              </label>
              <textarea
                value={contactFormData.message}
                onChange={(e) =>
                  setContactFormData((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                id="message"
                name="Message"
                rows={4}
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary rounded-md  border-2"
                placeholder="Background"
              />
            </div>
            <div className="text-left w-full shadow-sm px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md  border-2">
              <label htmlFor="CV">
                <span className="bg-white px-2 text-center rounded-md flex items-center justify-between py-3">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                      />
                    </svg>
                    <span>
                      {" "}
                      {contactFormData.file == undefined
                        ? "Attach your CV"
                        : contactFormData.file?.name}
                    </span>
                  </div>
                  {contactFormData.file?.name ? (
                    <strong className="text-xl cursor-pointer alert-del">
                      <Image
                        src={upload}
                        height={20}
                        width={20}
                        alt=""
                        title="Upload your CV"
                      />
                    </strong>
                  ) : (
                    ""
                  )}
                </span>
              </label>

              <input
                id="CV"
                name="CV"
                className="hidden"
                // value={contactFormData.file?.name || ""}
                type="file"
                onChange={(e) =>
                  setContactFormData((prev) => ({
                    ...prev,
                    // @ts-ignore
                    file: e.target.files[0],
                  }))
                }
              />
            </div>
            <span className="text-gray-400">
              * Please attach a .pdf, .doc or a .rtf file{" "}
            </span>
            <div className="text-center">
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className={`w-fit px-5 py-2 text-white font-bold text-lg bg-primary hover:bg-primary/80 rounded-lg cursor-pointer transition-colors duration-300`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <div className="absolute w-full h-full -z-10">
        <svg width="100%" height="100%" className="opacity-20 ">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle
              id="pattern-circle"
              cx="10"
              cy="10"
              r="1.6257413380501518"
              fill="#000"
            ></circle>
          </pattern>
          <rect
            id="rect"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-circles)"
          ></rect>
        </svg>
      </div>
      <div className="max-w-5xl mx-auto">
        {data && (
          <div className="container mt-4  bg-gray-200 p-4 mx-auto rounded">
            {/* <div className="border-b-2 pl-8 py-4">
            <h1 className="flex items-center  gap-4 text-lg md:text-xl my-2">
              <b>{data.jobTitle}</b>
            </h1>
            <button
              type="button"
              className=" px-4 py-1.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setIsOpen(true)}
            >
              Apply Now
            </button>
          </div> */}
            <div className="md:flex items-center justify-between lg:flex-row px-6 lg:pl-10 sm:pr-8 border-b-2 py-4 border-gray-300">
              <div className="">
                <h3 className="text-xl font-bold text-gray-900">
                  {data?.jobTitle}
                </h3>
                <div className="flex items-center gap-2 text-lg text-gray-500 py-1 mt-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  <div>{data?.projectLocations}</div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className=" px-4 py-2.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setIsOpen(true)}
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Details */}
            <div className="grid px-6 lg:px-10 py-6 space-y-4">
              {/* about company */}
              {data?.aboutTheCompany && (
                <div className="space-y-2">
                  <div className="">
                    <h2 className="font-bold text-lg md:text-xl ">
                      About The Company
                    </h2>
                  </div>
                  <div className="prose prose-teal">{data?.aboutTheCompany}</div>
                </div>
              )}

              {/* Job Summary */}

              {data?.description?.text && (
                <div className="space-y-2">
                  <div className="">
                    <h2 className="font-bold text-lg md:text-xl mt-2">
                      Job Summary
                    </h2>
                  </div>
                  <div className="prose prose-teal">
                    <RichText content={data?.description?.raw?.children} />
                  </div>
                </div>
              )}

              {data?.jobResponsibilities && (
                <div className="space-y-2">
                  <div className="">
                    <h2 className="font-bold text-lg md:text-xl  mt-2">
                      Roles & Responsibility
                    </h2>
                  </div>
                  <div className="prose prose-teal">
                    <RichText content={data?.jobResponsibilities?.raw?.children} />
                  </div>
                </div>
              )}
              {/* qualification */}
              {data?.education && (
                <div className="space-y-2">
                  <p className="text-lg md:text-xl font-bold mt-2">
                    Educational Qualification
                  </p>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg ">{data?.education}</h2>
                  </div>
                </div>
              )}
              {/* Skills & Experience */}
              {data?.skillsExperience && (
                <div className="space-y-2">
                  <div className="">
                    <h2 className="font-bold text-lg md:text-xl  mt-2 ">
                      Skills & Experience
                    </h2>
                  </div>
                  <div className="prose prose-teal ">
                    <RichText content={data?.skillsExperience?.raw?.children} />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }: { params: any }) {
  const { data: dataails } = await client.query({
    query: gql`
    query JobListings {
      jobListings(where: {isActive: true, slug: "${params.jobTitle}"}) {
        jobTitle
        slug
        aboutTheCompany
        description {
          raw
          text
        }
        projectLocations
        education
        skillsExperience{
          raw
          text
        }
        jobResponsibilities {
            raw
            text
        }
        createdAt
      }
    }
   `,
  });

  if (!dataails.jobListings.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: dataails.jobListings[0],
    },
  };
}

export default Jobs;
