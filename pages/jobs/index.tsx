import { gql } from "@apollo/client";
import Link from "next/link";
import client from "../../apolloClient";
import Swal from "sweetalert2";
import { useEffect } from "react";
import Image from "next/image";
import Dasksoft from "../../public/assets/Dasksoft.svg";
// @ts-ignore
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";
import Head from "next/head";

const MySwal = withReactContent(Swal);

const Jobs = ({ data }: { data: any }) => {
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    if (query && query.submit === "true") {
      MySwal.fire({
        icon: "success",
        titleText: "Success",
        text: "Thank you for submitting your query, a team member will get in touch with you shortly.",
        timer: 3500,
        showConfirmButton: false,
      });
    }
  }, [query]);
  return (
    <div className="relative mx-auto sm:w-full w-full pb-4">
         <Head>
        <title>{'DaskSoft - Job.'}</title>
        <link
          rel="DaskSoft"
          href={`/jobs`}
        />
         <meta
            name="description"
            content={
              "Over the years, we've built a culture of service, teamwork, and innovation. With an exceptional staff we are proud that people choose to build their careers with us."
            }
          />
        </Head>
      <div className="max-w-7xl mx-auto">
        {data?.length > 0 ? (
          <>
            <div className="pt-16 flex items-center justify-between flex-wrap sm:flex-wrap">
              <div className="ml-4 mt-3">
                <h3 className="text-2xl my-4 font-semibold text-black">
                  OPEN POSITIONS
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 px-4">
              {data.map((job: any) => {
                return (
                  <div
                    className="w-full border-blue-600 max-w-7xl shadow-lg rounded-lg hover:bg-gray-200 transition-shadow"
                    key={job.slug}
                  >
                    <div className="p-4">
                      {/* <div className="md:flex justify-between lg:flex-row  sm:pr-8"> */}
                      <div className="md:flex justify-between lg:flex-row gap-10 items-center content-center sm:pr-8">
                        <div className="">
                          <h3 className="text-xl font-medium text-gray-900">
                            {job.jobTitle}
                          </h3>
                          <div className="flex items-start text-justify gap-2 text-lg text-gray-500 py-1 mt-2 ">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-6 md:pt-1 "
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
                            </span>
                            <span className="text-ellipsis text-base md:text-lg">
                              {job.projectLocations}
                            </span>
                          </div>
                        </div>
                        <Link href={`/jobs/${job.slug}`}>
                          <button className="px-4 py-1.5 mt-2 border border-transparent shadow-sm text-sm font-medium rounded-md bg-primary hover:bg-primary/80 text-white focus:outline-offset-1 ">
                            Details
                          </button>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="py-10 px-8">
              <h2 className="text-sm">
                We are an equal opportunity employers and will consider all
                applications without regard to race, genetic information, sex,
                age, color, religion, national origin, veteran status,
                disability or any other characteristic protected by law. For
                information on H-1B nonimmigrants working at various US
                locations see{" "}
                <Link href={"/lca"} className="text-blue-500">
                  Labor Condition Applications
                </Link>
                (“LCAs”) page.
              </h2>
            </div>
          </>
        ) : (
          <div className="max-w-7xl mx-auto text-center text-xl grid place-items-center min-h-screen ">
            <div className="px-10">
              <div className="lg:text-xl text:lg text-secondary py-4">
                <h4>Currently there are no jobs available.</h4>
                <p>Please come back later.</p>
              </div>
              <Image
                src={Dasksoft}
                alt={""}
                height={300}
                width={500}
                className=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        jobListings(where: { isActive: true }) {
          jobTitle
          slug
          projectLocations
        }
      }
    `,
  });
  const { jobListings } = data;

  return {
    props: {
      data: jobListings,
    },
  };
}
export default Jobs;
