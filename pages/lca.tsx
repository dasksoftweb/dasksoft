import { gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import client from "../apolloClient";
import LcaAccordion from "../components/LcaAccordion";
import Loader from "../components/Loader";
import Head from "next/dist/shared/lib/head";
const Lca = () => {
  const [lcaList, setlcaList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getJobs() {
      const { data: jobListings, error } = await client.query({
        query: gql`
          query JobListings {
            jobListings(where: { isActive: true, showLCADetails: true }) {
              jobTitle
              lcaDetails {
                raw
              }
            }
          }
        `,
      });

      if (!error) {
        setlcaList(jobListings.jobListings);
        setLoading(false);
      } else {
        alert(error);
      }
    }

    getJobs();
  }, []);

  const LcaList = lcaList.filter((val: any) => {
    return val.lcaDetails !== null;
  });

  return (
    <div>
       <Head>
        <title>{'Dasksoft - Labor Condition Applications'}</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/lca`}
        />
        {/* OG Tags */}
        <meta property="og:type" content="Home" />
        <meta property="og:title" content={"Dasksoft - Labor Condition Applications"} />
        <meta property="og:description" content={"Labor Condition Applications (LCAs) are displayed below in accordance with U.S. Department of Labor regulations."} />
        <meta property="og:image" content={"../public/logo.png"} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/lca`}
        />
         {/*Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={"Dasksoft - Labor Condition Applications"} />
        <meta property="twitter:description" content={'Labor Condition Applications (LCAs) are displayed below in accordance with U.S. Department of Labor regulations.'} />
        <meta property="twitter:image" content={"../public/logo.png"} />
        <meta
          property="twitter:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/lca`}
        />
      </Head>
      <div className="min-h-screen mt-28 md:mt-32 max-w-7xl mx-auto px-5">
        <div className="pb-8 border-b">
          <h2 className="text-lg md:text-4xl font-bold pb-4 md:pb-8">
            Labor Condition Applications
          </h2>
          <h2 className="text-sm">
            Labor Condition Applications (LCAs) are displayed below in
            accordance with U.S. Department of Labor regulations.
          </h2>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <>
            {lcaList.length > 0 ? (
              LcaList.map((lca: any) => (
                <div key={lca.jobTitle}>
                  <LcaAccordion
                    title={lca.jobTitle}
                    content={lca.lcaDetails.raw.children}
                  />
                </div>
              ))
            ) : (
              <div className="text-lg md:text-3xl text-center  px-8 mt-20">
                No LCA Details have been added as of now.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Lca;
