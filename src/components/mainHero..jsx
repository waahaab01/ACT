"use client";
import Image from "next/image";
import HeroBG from "../assets/images/hero-bg.png";
import Hero from "../assets/images/hero.png";
export default function MainHero() {
  return (
    <div className="relative w-full h-auto">
  <Image
    src={HeroBG}
    alt="Hero Background"
    className="absolute top-0 left-0 w-full object-cover"
  />

  <div className="relative flex items-center justify-between h-full px-8 md:px-16">
    <div className="w-1/2 z-20 h-[650px] flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
        Empower Your Business with Expert Solutions.
      </h1>
      <p className="mt-10 text-gray-600 text-xl w-3/4">
        Aligning strategy, improving processes, and driving innovation to achieve sustainable growth.
      </p>
      <button className="mt-20 px-6 py-3 w-56 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-bold rounded-md shadow-md hover:scale-105 transition-transform">
        Learn More
      </button>
    </div>
    {/* <div className="hidden md:block relative z-20">
      <Image
        src={Hero}
        alt="Hero"
        className="w-[350px] object-contain relative top-20"
      />
    </div> */}
  </div>
</div>
  );
}
