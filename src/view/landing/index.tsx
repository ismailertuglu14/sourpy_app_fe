import React, { useEffect } from "react";
import { axiosInstance } from "../../core/network/axios";
import { Navbar } from "./components/Navbar";
const Landing: React.FC = () => {
  return (
    <div className=" h-full ">
      {/* Header Start*/}
      <Navbar />
      {/* Header End*/}

      {/* Body Start*/}

      <div className="flex flex-col w-full items-center py-20 ">
        <img
          src="/assets/images/saleBanner.webp"
          alt=""
          className="w-[70%] pt-24"
        />
      </div>

      {/* Body End*/}
    </div>
  );
};
export default Landing;
