import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { CiMail } from "react-icons/ci";
import { BiLock } from "react-icons/bi";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="login flex items-center justify-center h-screen w-full">
      <div className="login_container flex flex-col justify-center items-center w-1/3">
        <img src={Logo} alt="logo" className="mb-2"/>
        <p className="text-3xl font-bold">Welcome Back</p>
        <p className="text-sm text-gray-500 mt-2">Create your account</p>
        <div className="flex flex-col w-full mt-5">
          <p className="text-sm text-gray-500">Email</p>
          <div className="w-full flex  items-center border-2 border-gray-300 rounded-full p-3 mt-2">
            <CiMail size={22} className="mr-7 ml-1" />
            <input
              type="email"
              className="w-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="text-sm text-gray-500 mt-5">Password</p>
          <div className="w-full flex  items-center border-2 border-gray-300 rounded-full p-3 mt-2">
            <BiLock size={22} className="mr-7 ml-1 text-blue-400" />
            <input
              type="password"
              className="w-full"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-sm text-gray-500 mt-5">Confirm Password</p>
          <div className="w-full flex  items-center border-2 border-gray-300 rounded-full p-3 mt-2">
            <BiLock size={22} className="ml-1 mr-7" />
            <input
              type="password"
              className="w-full"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

        </div>
        <button className="w-full bg-blue-400 text-white p-3 mt-10 rounded-full">
          Login
        </button>
        <p className="text-sm text-gray-500 mt-5">
          Already have an account? <span className="text-blue-400 cursor-pointer" onClick={() => window.location.href = "/login"}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
