import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaTimes, FaCheck } from "react-icons/fa";
import visaLogo from "../../../Assets/visa.png";

const PaymentMethod = ({ show, setShow }) => {
  const [selectedDiv, setSelectedDiv] = useState(null);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      centered
      className="rounded-2xl shadow-2xl absolute hidden"
      style={{
        maxWidth: "600px",
        width: "0px",
        margin: "auto",
        alignSelf: "center",
        right: "0",
        left: "0",
        top: "0",
        bottom: "0",
      }}
    >
      <Modal.Body>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 w-full">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl flex flex-col justify-center items-center w-full">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-xl font-semibold">Add Payment MEthod</h2>
              <button
                onClick={() => setShow(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="h-36 w-2/3 flex items-center justify-center rounded-lg mt-4 gap-3">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className={`relative h-12 w-12 flex items-center justify-center border border-gray-100 rounded-lg p-1 ${
                    selectedDiv === index ? "h-16 w-16" : "hover:h-14 hover:w-14"
                  } transition-all duration-300`}
                  onClick={() => setSelectedDiv(index)}
                >
                  <img
                    src={visaLogo}
                    alt="visa"
                    className={`h-1/3 w-full`}
                  />
                  {selectedDiv === index && <FaCheck size={20} className="border-2 border-gray-100 shadow absolute bottom-[-10px] right-[-10px] mb-1 mr-1 text-white bg-green-500 rounded-full p-1" />}
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-4 w-full">
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-gray-700">
                    Cardholder First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-gray-700">
                    Cardholder Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="**** **** **** ****"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-gray-700">
                    Exp Month
                  </label>
                  <input
                    type="text"
                    placeholder="10"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-gray-700">
                    Exp Year
                  </label>
                  <input
                    type="text"
                    placeholder="2025"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-gray-700">
                    CVC
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 w-full">
              <button
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-full"
                onClick={() => setShow(false)}
              >
                Add Payment Method
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentMethod;
