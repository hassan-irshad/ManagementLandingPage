import React from "react";
import pattern from "../assets/bg-tablet-pattern.svg";
import graphic from "../assets/illustration-intro.svg";
import NavigationMenu from "../components/navigationMenu";

export default function Home() {
  return (
    <div className="container mx-auto">
      <img
        src={pattern}
        alt=""
        className="fixed -z-1 -top-10 -right-20 lg:-top-44 lg:-right-56"
      />
      <NavigationMenu />
      <div className="grid lg:grid-cols-2 mt-9 lg:mt-20 md:justify-items-center lg:justify-items-stretch">
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
