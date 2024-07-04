import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { MdMoreVert } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { Modal } from "react-bootstrap";

var teamData = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    role: "Admin",
    access: "All",
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    role: "Admin",
    access: "All",
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    role: "Admin",
    access: "All",
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    role: "Admin",
    access: "All",
  },
];

const roles = ["Admin", "Hiring Manager", "Contact"];

const Team = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="py-8 mx-auto w-full max-w-6xl px-10 relative">
      <Button
        className="flex absolute top-10 right-12 text-sm border border-gray-500 rounded-md px-2 py-1"
        onClick={() => setShow(true)}
      >
        <p className="text-center">+ Add a User</p>
      </Button>
      <h1 className="text-2xl">Team</h1>
      <p className="text-gray-500 mt-5">Team Members</p>
      <div className="pt-5 p-5 w-full shadow rounded-xl mt-5 border border-gray-100">
        <p className="pl-2 font-semibold">User Permissions</p>
        <table className="w-full mt-2">
          <tr className="text-left text-sm text-gray-500">
            <th className="pl-4 pb-2">NAME</th>
            <th className="pl-4 pb-2">EMAIL</th>
            <th className="pl-4 pb-2">ROLE</th>
            <th className="pl-4 pb-2">ACCESS</th>
            <th className="pl-4 pb-2"></th>
          </tr>
          {teamData.map((data) => (
            <tr key={data.email} className="bg-gray-100">
              <td className="pl-4 p-2">{data.name}</td>
              <td className="pl-4 p-2">{data.email}</td>
              <td className="pl-4 p-2">{data.role}</td>
              <td className="pl-4 p-2">{data.access}</td>
              <td className="pl-4 text-right">
                <MdMoreVert />
              </td>
            </tr>
          ))}
        </table>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        className="rounded-2xl shadow-2xl absolute p-10"
        style={{
          maxWidth: "600px",
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
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Add a user</h2>
                <button
                  onClick={() => setShow(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="" disabled selected>
                        Select Role
                      </option>
                      {roles.map((role) => (
                        <option key={role} value={role} className="">
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      Access
                    </label>
                    <input
                      type="text"
                      placeholder="Access"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-full">
                  Add New User
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Team;
