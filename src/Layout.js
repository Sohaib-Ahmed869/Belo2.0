import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Login/page";
import Signup from "./Signup/page";
import ForgetPassword from "./Login/forgetpass";
import OTP from "./Login/otpverificiation";

import DashboardLayout from "./AdminDashboard/DashboardLayout";

import RecruiterLogin from "./Recruiter/Login/page";
import RecruiterSignup from "./Recruiter/Signup";

import RecruiterDashboardLayout from "./Recruiter/RecruiterDashboard/DashboardLayout";

import HiringManagerDashboardLayout from "./HiringManager/HiringManagerDashboard/DashboardLayout";

import HomePage from "./examplepage";
const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/admindashboard" element={<DashboardLayout />} />

      <Route path="/recruiter-login" element={<RecruiterLogin />} />
      <Route path="/recruiter-signup" element={<RecruiterSignup />} />
      <Route
        path="/recruiterdashboard"
        element={<RecruiterDashboardLayout />}
      />

      <Route
        path="/hiringmanagerdashboard"
        element={<HiringManagerDashboardLayout />}
      />
    </Routes>
  );
};

export default Layout;
