import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik } from "@next/font/google";
import Navbar from "../components/Navbar";
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
            <title>
              Dasksoft - Building teams that are redefining the future
            </title>
            <meta
              name="description"
              content="Building teams that are redefining the future"
            />
            <link rel="icon" href="/favicon.png" />
          </Head>
          {loading && <Loader />}
          <Component {...pageProps} />
        </ScrollToTop>
      </Layout>
    </div>
  );
}
