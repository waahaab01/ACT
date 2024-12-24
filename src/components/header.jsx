"use client"; 

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-10 py-6 border-b-2">
      <div className="text-4xl font-bold">
        <h3>ACT.Inc</h3>
      </div>

      {/* Navigation Menu for Desktop */}
      <nav className="hidden md:flex">
        <ul className="flex gap-6 text-lg font-bold">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Contact us</li>
        </ul>
      </nav>

      <div className="hidden md:block">
        <button className="px-4 py-2 bg-gradient-to-r from-[#086AD8] to-[#42B9FF] rounded-md text-white font-bold">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-14 left-0 w-full z-50">
          <ul className="flex flex-col items-center gap-4 py-4 text-base">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Contact us</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
