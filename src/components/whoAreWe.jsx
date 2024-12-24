"use client";

import Image from "next/image";
import AboutUs from "../assets/images/about-us.jpeg";
import AboutUS2 from "../assets/images/about-us-2.jpeg";

export default function WhoAreWe() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 lg:px-40 py-10 md:py-36 space-y-8 md:space-y-0">
      <div className="relative w-full md:w-1/2 flex justify-start items-center">
        {/* <div> */}
          <Image src={AboutUs} alt="error"/>
          <Image src={AboutUS2} className="absolute top-[-30px] left-80" alt="error"/>
        {/* </div> */}
        {/* <div></div> */}
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <p className="text-blue-600 text-lg md:text-xl font-semibold mb-4">
          WHO WE ARE
        </p>
        <h3 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
          Welcome to <br />
          ACT Inc.
        </h3>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          ACT Inc. is a business consulting and technology firm with a focus on
          realizing value from emerging computer and telecommunications-based
          technologies. Our mission is to provide services, which help our
          clients to profit from information management solutions.
        </p>
        <button className="px-8 md:px-20 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg rounded-md shadow-md hover:scale-105 transition-transform">
          Learn More
        </button>
      </div>
    </div>
  );
}
