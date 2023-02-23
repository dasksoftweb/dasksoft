import Navbar from "./Navbar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100vh] ">
      <Navbar />
      <main>{children}</main>
      <footer className="flex justify-center py-4 shadow-lg border-t-2 sticky top-[100%] ">
        <h2 className="mr-2">&#169; 2022</h2>
        <h2 className="">All Right reserved &#174; by Dasksoft </h2>
      </footer>
    </div>
  );
}

export default Layout;
