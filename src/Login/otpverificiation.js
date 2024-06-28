import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { CiMail } from "react-icons/ci";
import { BiLock } from "react-icons/bi";
const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", " ", " "]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus on next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="login flex items-center justify-center h-screen w-full">
      <div className="login_container flex flex-col justify-center items-center w-1/3">
        <img src={Logo} alt="logo" className="mb-2" />
        <p className="text-3xl font-bold">Welcome Back</p>
        <p className="text-sm text-gray-500 mt-2">Create your account</p>
        <p className="text-sm text-gray-500 mt-2">
          Enter one time passcode that has been sent on your account
        </p>

        <div className="flex space-x-4 mt-6">
          {otp.map((data, index) => {
            return (
              <input
                className="border border-gray-400 p-3 w-14 text-center text-xl rounded-md bg-gray-100"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>

        <button
          className="w-96 bg-blue-400 text-white p-3 mt-5 rounded-full"
        >
          Continue with Email
        </button>

        <p className="text-sm text-gray-500 mt-5">
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => (window.location.href = "/login")}
          >
           Would you rather use email and password?
          </span>
        </p>
      </div>
    </div>
  );
};

export default OTP;
