import React from "react";
import TangerpayLogo from "../assets/Tangerpay.png";

const Header = () => {
  return (
    <div className="w-full bg-[#f28500] px-10 py-5 grid grid-cols-3 items-center">
      <div>
        <img src={TangerpayLogo} className="bg-white p-3 rounded-lg " />
      </div>
      <div className="text-3xl font-bold text-center">Contact Details</div>
      <div></div>
    </div>
  );
};

export default Header;
