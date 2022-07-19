import Image from "next/image";
import React from "react";
import spinner from "../public/spinner.gif";

const Spinner = () => {
  return (
    <>
      <Image
        className="w-[500px] flex justify-center items-center m-auto"
        src={spinner}
        alt="loading"
      />
    </>
  );
};

export default Spinner;
