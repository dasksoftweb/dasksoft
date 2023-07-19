import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik } from "@next/font/google";
import { useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Loader from "../components/Loader";
import ScrollToTop from "../components/ScrollToTop";

NProgress.configure({ showSpinner: false });

const rubik = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setloading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setloading(true);
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", (url) => {
    setloading(false);
    NProgress.done();
  });
  return (
    <div className={rubik.className}>
      <Layout>
        <ScrollToTop>

          <Head>
            <title>{'Dasksoft - Building teams that are redefining the future'}</title>
            <link
              rel="canonical"
              href={`https://www.dasksoft.com/`}
            />
            <link rel="icon" href="/favicon.png" />
            {/* OG Tags */}
            <meta property="og:type" content="Home" />
            <meta property="og:title" content={"Dasksoft - Building teams that are redefining the future"} />
            <meta property="og:description" content={"Dasksoft provides an unmatched talent pool of tech consultants on-demand to improve efficiency, and scale your organization based on your exact needs."} />
            <meta property="og:image" content={""} />
            <meta
              property="og:url"
              content={`https://www.dasksoft.com/`}
            />

           
            <meta name="twitter:card" content="summary" />
            <meta property="twitter:title" content={"Dasksoft - Dasksoft provides an unmatched talent pool of tech consultants on-demand to improve efficiency, and scale your organization based on your exact needs."} />
            <meta property="twitter:description" content={'Building teams that are redefining the future'} />
            <meta property="twitter:image" content={""} />
            <meta
              property="twitter:url"
              content={`https://www.dasksoft.com/`}
            />

            
          </Head>
          {loading && <Loader />}
          <Component {...pageProps} />
        </ScrollToTop>
      </Layout>
    </div>
  );
}
