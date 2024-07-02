import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import dashboard from "../Assets/dashboard.png";

import Dashboard from "./dashboard";
import Candidates from "./candidates";
import Team from "./team";
import Schedule from "./schedule";
import HelpCenter from "./HelpCenter/Main/main";
import GettingStarted from "./HelpCenter/gettingStarted";
import UsingBelo from "./HelpCenter/usingBelo";
import SubBilling from "./HelpCenter/subBilling";
import TermsAccess from "./HelpCenter/termsAccess";
import Integration from "./HelpCenter/integration";
import TroubleShooting from "./HelpCenter/troubleshooting";
import { set } from "date-fns";

const DashboardLayout = () => {
  const [activeOption, setActiveOption] = useState("Dashboard");
  const [showSettingsSuboptions, setShowSettingsSuboptions] = useState(false);
  const [showHelpCenterSuboptions, setShowHelpCenterSuboptions] =
    useState(false);

  const handleOptionClick = (option) => {
    setActiveOption(option);
    // Close suboptions if another main option is clicked
    if (option !== "Settings") setShowSettingsSuboptions(false);
    if (option !== "HelpCenter") setShowHelpCenterSuboptions(false);
  };

  const toggleSettingsSuboptions = () => {
    setShowSettingsSuboptions(!showSettingsSuboptions);
    // Ensure Help Center suboptions are closed when toggling Settings
    setShowHelpCenterSuboptions(false);
  };

  const toggleHelpCenterSuboptions = () => {
    setShowHelpCenterSuboptions(!showHelpCenterSuboptions);
    // Ensure Settings suboptions are closed when toggling Help Center
    setShowSettingsSuboptions(false);
  };

  return (
    <div className="flex flex-row w-full">
      <div className="w-1/6 bg-white border-r border-black">
      <div className="w-1/6 bg-white border-r border-black">
        <img src={Logo} alt="logo" className="w-36 m-5" />
        <div className="flex flex-col items-start justify-center text-black ">
          <div
            className={`flex items-center gap-2 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold pl-4 ${
              activeOption === "Dashboard" ? "bg-gray-300" : ""
            }`}
            onClick={() => {
              setActiveOption("Dashboard");
              setShowSettingsSuboptions(false);
              setShowHelpCenterSuboptions(false);
            }}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p>Dashboard</p>
          </div>
          <div
            className={`flex items-center gap-2 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold pl-4  ${
              activeOption === "Candidates" ? "bg-gray-300" : ""
            }`}
            onClick={() => {
              setActiveOption("Candidates");
              setShowSettingsSuboptions(false);
              setShowHelpCenterSuboptions(false);
            }}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Candidates</p>
          </div>
          <div
            className={`flex items-center gap-2 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold pl-4 ${
              activeOption === "Roles" ? "bg-gray-300" : ""
            }`}
            onClick={() => {
              setActiveOption("Roles");
              setShowSettingsSuboptions(false);
              setShowHelpCenterSuboptions(false);
            }}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Roles</p>
          </div>
          <div
            className={`flex items-center gap-2 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold pl-4 ${
              activeOption === "Team" ? "bg-gray-300" : ""
            }`}
            onClick={() => {
              setActiveOption("Team");
              setShowSettingsSuboptions(false);
              setShowHelpCenterSuboptions(false);
            }}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Team</p>
          </div>
          <div
            className={`flex items-center gap-2 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold pl-4 ${
              activeOption === "Schedule" ? "bg-gray-300" : ""
            }`}
            onClick={() => {
              setActiveOption("Schedule");
              setShowSettingsSuboptions(false);
              setShowHelpCenterSuboptions(false);
            }}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Schedule</p>
          </div>
          <div
            className={`flex items-center gap-2 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold pl-4 ${
              ["Profile", "Billing", "Email"].includes(activeOption)
                ? "bg-gray-200"
                : ""
            }`}
            onClick={() => {
              setActiveOption("Profile");
              toggleSettingsSuboptions();
            }}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Settings</p>
          </div>
          {showSettingsSuboptions && (
            <>
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
            </>
          )}
          <div
            className={`flex items-center gap-2 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold pl-4 ${
              [
                "HelpCenter",
                "GettingStarted",
                "UsingBelo",
                "SubBilling",
                "TeamsAccess",
                "Integration",
                "TroubleShooting",
              ].includes(activeOption)
                ? "bg-gray-200"
                : ""
            }`}
            onClick={() => {
              setActiveOption("HelpCenter");
              toggleHelpCenterSuboptions();
            }}
          >
            <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
            <p className="">Help Center</p>
          </div>
          {showHelpCenterSuboptions && (
            <>
              <div
                className={`flex items-center gap-2 pl-10 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold ${
                  activeOption === "GettingStarted" ? "bg-gray-300" : ""
                }`}
                onClick={() => setActiveOption("GettingStarted")}
              >
                <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
                <p className="">Getting Started</p>
              </div>
              <div
                className={`flex items-center gap-2 pl-10 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold ${
                  activeOption === "UsingBelo" ? "bg-gray-300" : ""
                }`}
                onClick={() => setActiveOption("UsingBelo")}
              >
                <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
                <p className="">Using Belo</p>
              </div>
              <div
                className={`flex items-center gap-2 pl-10 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold ${
                  activeOption === "SubBilling" ? "bg-gray-300" : ""
                }`}
                onClick={() => setActiveOption("SubBilling")}
              >
                <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
                <p className="">Subscription & Billing</p>
              </div>
              <div
                className={`flex items-center gap-2 pl-10 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold ${
                  activeOption === "TeamsAccess" ? "bg-gray-300" : ""
                }`}
                onClick={() => setActiveOption("TeamsAccess")}
              >
                <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
                <p className="">Teams & Access</p>
              </div>
              <div
                className={`flex items-center gap-2 pl-10 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold ${
                  activeOption === "Integration" ? "bg-gray-300" : ""
                }`}
                onClick={() => setActiveOption("Integration")}
              >
                <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
                <p className="">Integration</p>
              </div>
              <div
                className={`flex items-center gap-2 pl-10 w-full hover:bg-gray-300 p-4 cursor-pointer hover:font-semibold ${
                  activeOption === "TroubleShooting" ? "bg-gray-300" : ""
                }`}
                onClick={() => setActiveOption("TroubleShooting")}
              >
                <img src={dashboard} alt="dashboard" className="w-4 mr-2" />
                <p className="">Trouble Shooting</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-5/6 bg-white">
        {
          {
            Dashboard: <Dashboard />,
            Candidates: <Candidates />,
            Roles: <div>Roles</div>,
            Team: <Team />,
            Schedule: <Schedule />,
            Settings: <div>Settings</div>,
            Profile: <div>Profile</div>,
            Billing: <div>Billing</div>,
            Email: <div>Email</div>,
            HelpCenter: <HelpCenter />,
            GettingStarted: <GettingStarted />,
            UsingBelo: <UsingBelo />,
            SubBilling: <SubBilling />,
            TeamsAccess: <TermsAccess />,
            Integration: <Integration />,
            TroubleShooting: <TroubleShooting />,
          }[activeOption]
        }
      </div>
    </div>
  );
};

export default DashboardLayout;
