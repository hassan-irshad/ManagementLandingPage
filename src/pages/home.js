import React from "react";
import logo from "../assets/logo.svg";
import pattern from "../assets/bg-tablet-pattern.svg";

export default function Home() {
  return (
    <div className="container mx-auto">
      <img src={pattern} alt="" className="fixed -z-1 -top-24 -right-40" />
      <div className="flex flex-row justify-between items-center mt-14">
        <img src={logo} alt="" />
        <div className="text-sm font-medium text-darkBlue">
          <a href="/" className="mx-5">
            Pricing
          </a>
          <a href="/" className="mx-5">
            Product
          </a>
          <a href="/" className="mx-5">
            About Us
          </a>
          <a href="/" className="mx-5">
            Careers
          </a>
          <a href="/" className="mx-5">
            Community
          </a>
        </div>
        <a
          href="/"
          className="text-lightGray text-sm bg-brightRed px-9 py-3 rounded-3xl shadow-2xl"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
