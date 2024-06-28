import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import dashboard from "../Assets/dashboard.png";


import Dashboard from "./dashboard";

const DashboardLayout = () => {
  const [activeOption, setActiveOption] = useState("Dashboard");
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/6 bg-white border-r border-black"> 
        <img src={Logo} alt="logo" className="w-36 m-5" />
        <div className="flex flex-col items-start justify-center text-black ">
          <div
            className={`flex items-center gap-2 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold pl-4 ${
              activeOption === "Dashboard" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveOption("Dashboard")}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p>Dashboard</p>
          </div>
          <div
            className={`flex items-center gap-2 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold pl-4  ${
              activeOption === "Candidates" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveOption("Candidates")}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Candidates</p>
          </div>
          <div
            className={`flex items-center gap-2 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold pl-4 ${
              activeOption === "Roles" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveOption("Roles")}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Roles</p>
          </div>
          <div
            className={`flex items-center gap-2 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold pl-4 ${
              activeOption === "Team" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveOption("Team")}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Team</p>
          </div>
          <div
            className={`flex items-center gap-2 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold pl-4 ${
              activeOption === "Schedule" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveOption("Schedule")}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Schedule</p>
          </div>
          <div
            className={`flex items-center gap-2 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold pl-4 ${
              activeOption === "Settings" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveOption("Settings")}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Settings</p>
          </div>
          <div
            className={`flex items-center gap-2 pl-10 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold ${
              activeOption === "Profile" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveOption("Profile")}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Profile</p>
          </div>
          <div
            className={`flex items-center gap-2 pl-10 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold ${
              activeOption === "Billing" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveOption("Billing")}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Billing</p>
          </div>
          <div
            className={`flex items-center gap-2 pl-10 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold ${
              activeOption === "Email" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveOption("Email")}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Email</p>
          </div>
        </div>
      </div>
      <div className="w-5/6 bg-gray-200">
        {
          {
            Dashboard: <Dashboard />,
            Candidates: <div>Candidates</div>,
            Roles: <div>Roles</div>,
            Team: <div>Team</div>,
            Schedule: <div>Schedule</div>,
            Settings: <div>Settings</div>,
            Profile: <div>Profile</div>,
            Billing: <div>Billing</div>,
            Email: <div>Email</div>,
          }[activeOption]
        }
      </div>
    </div>
  );
};

export default DashboardLayout;
