import React from "react";
// import { useState } from "react";
import { FaSearch, FaBars, FaUserCircle } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <FaBars className="text-red-600" onClick={toggleSidebar} />
      </div>
      <div className="flex gap-10 pr-5">
        <div className="flex items-center border border-gray-300 rounded-md px-2 py-1 bg-white">
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-gray-600 flex-1"
          />
          <FaSearch className="text-gray-600" />
        </div>
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-gray-600" size={24} />
          <MdArrowDropDown className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Header;
