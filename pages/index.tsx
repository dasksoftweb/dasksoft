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
      <div>
        <HeroSection />
        <Features />
        <Contact />
      </div>
    </div>
  );
}
