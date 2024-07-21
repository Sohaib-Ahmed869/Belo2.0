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

const Layout = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/admindashboard" element={<DashboardLayout />} />

      <Route path="/recruiter-login" element={<RecruiterLogin />} />
      <Route path="/recruiter-signup" element={<RecruiterSignup />} />
      <Route path="/recruiterdashboard" element={<RecruiterDashboardLayout/>} />
    </Routes>
  );
};

export default Layout;
