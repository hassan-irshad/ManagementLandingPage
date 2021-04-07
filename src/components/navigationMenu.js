import React, { useRef, useState } from "react";
import menuIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import logo from "../assets/logo.svg";

export default function NavigationMenu() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const mobileMenuRef = useRef(null);

  const mobileMenuVisibility = () => {
    setMobileMenuVisible(!mobileMenuVisible);
    if (!mobileMenuVisible) {
      mobileMenuRef.current.classList.remove("animate__fadeOut");
      mobileMenuRef.current.classList.remove("hidden");
      mobileMenuRef.current.classList.add("animate__fadeIn");
    } else {
      mobileMenuRef.current.classList.remove("animate__fadeIn");
      mobileMenuRef.current.classList.add("animate__fadeOut");
    }
  };
  return (
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
      <button
        onClick={mobileMenuVisibility}
        className="z-50 focus:outline-none lg:hidden"
      >
        <img src={mobileMenuVisible ? closeIcon : menuIcon} alt="" />
      </button>
      <div
        ref={mobileMenuRef}
        className="animate__animated animate__fadeOut bg-gradient-to-t from-grayishBlue absolute h-screen bottom-0 w-screen right-0 hidden lg:hidden"
      >
        <div className="bg-white w-80 py-10 absolute top-32 left-0 right-0 ml-auto mr-auto rounded flex flex-col items-center justify-center">
          <a href="/" className="mb-5 font-semibold">
            Pricing
          </a>
          <a href="/" className="mb-5 font-semibold text-darkBlue">
            Product
          </a>
          <a href="/" className="mb-5 font-semibold text-darkBlue">
            About Us
          </a>
          <a href="/" className="mb-5 font-semibold text-darkBlue">
            Careers
          </a>
          <a href="/" className="mb-5 font-semibold text-darkBlue">
            Community
          </a>
        </div>
      </div>
    </div>
  );
}
