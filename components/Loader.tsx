import React from "react";
import { Watch } from "react-loader-spinner";
const Loader = () => {
  return (
    <>
      <div
        className={`w-screen h-screen bg-prime-blue/70 backdrop-blur-md fixed top-0 left-0 grid place-items-center transition-all visible opacity-100 `}
        style={{ zIndex: 60 }}
      >
        {/* <Image height={100} width={100} src={loader} unoptimized alt="" />
         */}
        <Watch
          height="100"
          width="100"
          radius="48"
          color="#0068FF"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Loader;
