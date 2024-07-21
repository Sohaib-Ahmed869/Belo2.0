import React from "react";
import Logo from "./Assets/Logo.png";

const HomePage = () => {
  return (
    <div className="home flex items-center justify-center h-screen w-full">
      <div className="home_container flex flex-col justify-center items-center w-1/3">
        <img src={Logo} alt="logo" className="mb-2" />
        <p className="text-3xl font-bold">Welcome to the Hiring Portal</p>
        <p className="text-sm text-gray-500 mt-2">
          Find the best candidates for your company
        </p>
        <button
          className="w-full bg-blue-400 text-white p-3 mt-10 rounded-full"
          onClick={() => (window.location.href = "/hiringmanagerdashboard")}
        >
          Hiring Manager
        </button>
        <button className="w-full bg-blue-400 text-white p-3 mt-10 rounded-full" onClick={() => (window.location.href = "/recruiter-signup")}>
          Recruiter
        </button>
        <button className="w-full bg-blue-400 text-white p-3 mt-10 rounded-full" onClick={() => (window.location.href = "/login")}>
          Admin
        </button>
        <p className="text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
