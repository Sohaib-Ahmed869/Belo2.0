import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { CiMail } from "react-icons/ci";
import { BiLock } from "react-icons/bi";
import { Modal } from "react-bootstrap";
const ForgetPassword = () => {
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
              className="w-full"
              placeholder="olivia@untitled.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button
          className="w-full bg-blue-400 text-white p-3 mt-10 rounded-full"
          onClick={() => setShowForgetPasswordModal(true)}
        >
          Continue with Email
        </button>
        <p className="text-sm text-gray-500 mt-5">
          Would your rather use a{" "}
          <span className="text-blue-400 cursor-pointer">
            email and password?
          </span>
        </p>
      </div>
      {showForgetPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
      <Modal
        show={showForgetPasswordModal}
        onHide={() => setShowForgetPasswordModal(false)}
        centered
        className=" p-10 rounded-2xl w-1/3 shadow-xl z-50"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-2xl font-bold">
            One-Time Passcode
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-md text-gray-800">
            A One-Time Passcode will be sent on your account
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-blue-400 text-white p-2 rounded-full w-full mt-10"
            onClick={() => setShowForgetPasswordModal(false)}
          >
            Send OTP
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ForgetPassword;
