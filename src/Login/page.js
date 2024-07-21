import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { CiMail } from "react-icons/ci";
import { BiLock } from "react-icons/bi";
import { Modal } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showForgetPasswordModal, setShowForgetPasswordModal] = useState(false);

  return (
    <div className={`login flex items-center justify-center h-screen w-full`}>
      <div className="login_container flex flex-col justify-center items-center w-1/3">
        <img src={Logo} alt="logo" className="mb-2" />
        <p className="text-3xl font-bold">Welcome Back</p>
        <p className="text-sm text-gray-500 mt-2">Login to your account</p>
        <div className="flex flex-col w-full mt-5">
          <p className="text-sm text-gray-500">Email</p>
          <div className="w-full flex  items-center border-2 border-gray-300 rounded-full p-3 mt-2">
            <CiMail size={22} className="mr-7" />
            <input
              type="email"
              className="w-full focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="text-sm text-gray-500 mt-5">Password</p>
          <div className="w-full flex  items-center border-2 border-gray-300 rounded-full p-3 mt-2">
            <BiLock size={22} className="mr-7" />
            <input
              type="password"
              className="w-full focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-end mt-2">
            <p
              className="text-sm text-gray-800 cursor-pointer"
              onClick={() => setShowForgetPasswordModal(true)}
            >
              Forgot Password?
            </p>
          </div>
        </div>
        <button
          className="w-full bg-blue-400 text-white p-3 mt-10 rounded-full"
          onClick={() => (window.location.href = "/admindashboard")}
        >
          Login
        </button>
        <p className="text-sm text-gray-500 mt-5">
          Don't have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => {
              window.location.href = "/signup";
            }}
          >
            Sign Up
          </span>
        </p>
        <p className="text-sm text-gray-500 mt-5">
          Are you a Hiring Manager?{" "}
          <span className="text-blue-400 cursor-pointer">Click Here</span>
        </p>
      </div>
      {showForgetPasswordModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowForgetPasswordModal(false)}
        ></div>
      )}
      <Modal
        show={showForgetPasswordModal}
        onHide={() => setShowForgetPasswordModal(false)}
        centered
        className=" p-10 rounded-2xl w-1/3 shadow-xl z-50 bg-white"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-2xl font-bold">
            Forgot Password?
          </Modal.Title>
          <p className="text-sm text-gray-500">
            Enter email address associated with your account
          </p>
        </Modal.Header>
        <Modal.Body>
          <p className="text-sm text-gray-800">Email</p>
          <div className="w-full flex  items-center border border-gray-300 rounded-md p-2 mt-2">
            <input
              type="email"
              className="w-full focus:outline-none"
              placeholder="Email Address"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-blue-400 text-white p-2 rounded-full w-full mt-10"
            onClick={() => (window.location.href = "/forgetpassword")}
          >
            Reset Password
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
