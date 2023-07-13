import Head from "next/head";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Contact from "../components/Contact";
// @ts-ignore
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useEffect } from "react";
const MySwal = withReactContent(Swal);

export default function Home() {
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
    <div className="">
         <Head>
        <title>{'Dasksoft - Building teams that are redefining the future'}</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
        />
        {/* OG Tags */}
        <meta property="og:type" content="Home" />
        <meta property="og:title" content={"Dasksoft - Building teams that are redefining the future"} />
        <meta property="og:description" content={"Building teams that are redefining the future"} />
        <meta property="og:image" content={"../public/logo.png"} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
        />
         {/*Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={"Dasksoft - Labor Condition Applications"} />
        <meta property="twitter:description" content={'Building teams that are redefining the future'} />
        <meta property="twitter:image" content={"../public/logo.png"} />
        <meta
          property="twitter:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
        />
      </Head>
      <div>
        <HeroSection />
        <Features />
        <Contact />
      </div>
    </div>
  );
}
