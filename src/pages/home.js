import React from "react";
import logo from "../assets/logo.svg";
import pattern from "../assets/bg-tablet-pattern.svg";
import graphic from "../assets/illustration-intro.svg";
import menuIcon from "../assets/icon-hamburger.svg";

export default function Home() {
  return (
    <div className="container mx-auto">
      <img src={pattern} alt="" className="fixed -z-1 -top-44 -right-56" />
      <div className="flex flex-row justify-between items-center mt-14 mx-5 lg:mx-0">
        <img src={logo} alt="" />
        <div className="text-sm font-medium text-darkBlue hidden lg:block">
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
          className="text-lightGray text-sm bg-brightRed px-9 py-3 rounded-3xl shadow-2xl hidden lg:block"
        >
          Get Started
        </a>
        <img src={menuIcon} alt="" className="lg:hidden" />
      </div>
      <div className="grid lg:grid-cols-2 mt-20 md:justify-items-center lg:justify-items-stretch">
        <div className="flex justify-end items-center lg:order-1">
          <img src={graphic} alt="" />
        </div>
        <div className="lg:w-4/5 flex flex-col justify-center items-center lg:items-start">
          <div className="text-4xl lg:text-6xl font-semibold text-darkBlue text-center lg:text-left w-80 sm:w-auto">
            Bring everyone together to build better products.
          </div>
          <div className="text-grayishBlue text-base mt-6 text-center w-80 sm:w-96 lg:text-left">
            Manage makes it simple for software teams to play day-to-day tasks
            while keeping the larger team goals in view.
          </div>
          <a
            href="/"
            className="mt-12 text-lightGray text-sm bg-brightRed px-9 py-3 rounded-3xl shadow-2xl self-auto"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
