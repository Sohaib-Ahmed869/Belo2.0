import React from "react";
import { Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const ChangeEmail = ({ show, setShow }) => {
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Change Email</h2>
              <button
                onClick={() => setShow(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex space-x-4">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Current Email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Current Email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    New Email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter New Email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Email
                  </label>
                  <input
                    type="text"
                    placeholder="Confirm Email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-full"
                onClick={() => setShow(false)}
              >
                Change Email
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ChangeEmail;
