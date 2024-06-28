import React from "react";
import { useState } from "react";
import Sidebar from "../Components/sidebar";
import Header from "../Components/header";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-full h-full">
      <div
        className={` h-screen border border-gray-300 sidebar transition-transform duration-500 ${
          isSidebarOpen ? "w-1/6" : "-translate-x-full hidden"
        }`}
      >
        <Sidebar />
      </div>
      <div className={`flex flex-col ${isSidebarOpen ? "w-5/6" : "w-screen"}`}>
        <div className="w-full border-b border-gray-300">
          <Header toggleSidebar={toggleSidebar} />
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
