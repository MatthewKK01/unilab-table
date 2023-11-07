/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/pngegg.png";

function StartHere() {
  const navigate = useNavigate();

  return (
    <div className="stars flex flex-col items-center justify-center h-full bg-black bg-opacity-90">
      <img src={image} alt="" />
      <h1 className="text-[#4980C0]  font-semibold md:mt-[46px] md:mb-[149px] lg:text-[54px] capitalize sm:text-center sm:text-3xl sm:mt-16 sm:mb-24">
        Get Started today
      </h1>
      <button
        onClick={() => navigate("/login")}
        className=" w-[395px] h-[79px] text-white text-2xl font-normal capitalize bg-[#4980C0] "
      >
        get started
      </button>
    </div>
  );
}

export default StartHere;
