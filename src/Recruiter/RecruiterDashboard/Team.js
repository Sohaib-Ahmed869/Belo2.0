import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { Modal } from "react-bootstrap";

const team_members = [
  {
    name: "John Doe",
    email: "john@email.com",
    role: "Recruiter",
    access: "Admin",
  },
  {
    name: "Jane Doe",
    email: "jane@gmail.com",
    role: "Recruiter",
    access: "Admin",
  },
  {
    name: "John kluveski",
    email: "kluveski@gmail.com",
    role: "Recruiter",
    access: "Wheel Dealer",
  },
];

const RecruiterTeam = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  return (
    <div className="py-8 w-full  px-10 relative">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-semi bold text-left">Team</h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="bg-blue-400 text-white px-5 py-2 rounded-md hover:bg-blue-600 hover:text-white flex items-center gap-2"
            onClick={() => setShowAddUser(true)}
          >
            <BsPlus className="inline-block" size={20} />
            Add a User
          </button>
        </div>
      </div>
      <h2 className="text-lg mt-10 font-semibold text-blue-400">
        Team Members
      </h2>
      <div className="table w-full mt-5 border rounded-lg p-8 shadow-lg">
        <h1 className="text-xl font-semibold ml-2">User Permissions</h1>
        <table className="w-full border-none mt-2">
          <tr className="text-left text-semibold text-blue-400">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Access</th>
            <th className="p-2">Action</th>
          </tr>
          {team_members.map((member) => (
            <tr className="text-left bg-gray-50">
              <td className="p-2">{member.name}</td>
              <td className="p-2">{member.email}</td>
              <td className="p-2">{member.role}</td>
              <td className="p-2">{member.access}</td>
              <td className="p-2">
                <BiDotsVerticalRounded size={20} />
              </td>
            </tr>
          ))}
        </table>
      </div>
      {showAddUser && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setShowAddUser(false)}
        ></div>
      )}
      <Modal
        show={showAddUser}
        onHide={() => setShowAddUser(false)}
        centered
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/2 shadow-xl z-50 bg-white p-10"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 p-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="role" className="font-semibold">
                  Role
                </label>
                <input
                  type="text"
                  placeholder="Role"
                  className="border border-gray-300 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="access" className="font-semibold">
                  Access
                </label>
                <input
                  type="text"
                  placeholder="Access"
                  className="border border-gray-300 p-2 rounded-md"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="mt-5">
          <button
            className="bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full"
            onClick={() => setShowAddUser(false)}
          >
            Add New User
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RecruiterTeam;
