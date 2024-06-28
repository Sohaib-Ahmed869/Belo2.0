import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "./Layouts/adminLayout";

import Login from "./Login/page";
import Signup from "./Signup/page";
import ForgetPassword from "./Login/forgetpass";
import OTP from "./Login/otpverificiation";

import DashboardLayout from "./AdminDashboard/DashboardLayout";


import Team from "./Team/page";

const Layout = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/admindashboard" element={<DashboardLayout />} />


      <Route path="/admin" element={<AdminLayout/>}>
        <Route path="team" element={<Team />} />
      </Route>

    </Routes>
  );
};

export default Layout;
