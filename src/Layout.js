import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Login/page";
import Signup from "./Signup/page";
import ForgetPassword from "./Login/forgetpass";
import OTP from "./Login/otpverificiation";

const Layout = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/otp" element={<OTP />} />
    </Routes>
  );
};

export default Layout;
