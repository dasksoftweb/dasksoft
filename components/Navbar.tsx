import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";
import logo from "../public/logo.png";
import logo2 from "../public/assets/reverse-logo.png";

const navigation = [
  { name: "Jobs", href: "/jobs" },
  { name: "Contact us", href: "/#contact" },
];

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 p-4 shadow-lg  ${"bg-gray-100/90 backdrop-blur-md text-black"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8" aria-label="Top">
        <div className="w-full  sm:-mb-0 flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <div className="mr-auto md:mx-0 ">
              <Link href="/">
                <div className="cursor-pointer pt-2">
                  <span className="sr-only">Dasksoft logo</span>
                  <div className="hover:scale-110 duration-300 transition-transform ">
                    {" "}
                    <Image
                      priority
                      height={80}
                      width={160}
                      alt="My webiste logo"
                      className=""
                      src={logo}
                    />
                  </div>
                </div>
              </Link>
            </div>
            {/* MD+ */}
            <div className="hidden gap-10 text-center relative md:flex">
              {navigation.map((navItem) => (
                <Link key={navItem.name} href={navItem.href} scroll={false}>
                  <span
                    className={` text-base cursor-pointer font-bold hover:text-blue-500 duration-300 transition-colors`}
                  >
                    {navItem.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* PHONES -> TILL MD */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex p-3 md:hidden absolute top-3 right-1 ml-auto"
          aria-label="Menu Mobile Button"
        >
          <svg
            className="w-8 h-8 fill-white"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } fixed transition-all top-0 left-0 w-full h-screen z-[100] bg-primary text-white text-lg`}
        >
          <div className="flex justify-between items-center px-2">
            <div className="mr-auto md:mx-0 ">
              <Link href="/">
                <div className="cursor-pointer pt-2">
                  <span className="sr-only">Dasksoft logo</span>
                  <div className="hover:scale-110 duration-300 transition-transform ">
                    {" "}
                    <Image
                      priority
                      height={60}
                      width={140}
                      alt="My webiste logo"
                      className=""
                      src={logo2}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="absolute top-1 right-4 text-white text-4xl"
              aria-label="Menu Mobile Button"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col justify-center items-center gap-4 h-full pb-32">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg block font-medium text-white hover:text-primary"
              >
                <span onClick={() => setIsOpen(false)}>{link.name}</span>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
