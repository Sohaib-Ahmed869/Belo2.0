import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import KanbanBoard from "./Kanban";

const roles = [
  {
    id: 1,
    title: "Senior Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    id: 1,
    title: "Senior Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
];

const activeRoles = [
  {
    id: 1,
    title: "Senior Developer",
    uploadedby: "John Doe",
    nextAction: "Tuesday, 12th October 2021",
    status: "Pending",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    id: 1,
    title: "Senior Developer",
    uploadedby: "John Doe",
    nextAction: "Tuesday, 12th October 2021",
    status: "Pending",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
];

const inactiveRoles = [
  {
    id: 1,
    title: "Senior Developer",
    uploadedby: "John Doe",
    nextAction: "Tuesday, 12th October 2021",
    status: "Closed",
  },
  {
    id: 1,
    title: "Senior Developer",
    uploadedby: "John Doe",
    nextAction: "Tuesday, 12th October 2021",
    status: "Closed",
  },
];

const RoleDescription = ({ role }) => {
  const [optionSelected, setOptionSelected] = useState("Active Roles");
  const [selectedRole, setSelectedRole] = useState("");
  return (
    <div>
      {!selectedRole ? (
        <div>
          <div>
            <h1 className="text-3xl font-semi bold text-left">Roles</h1>
          </div>
          <div
            className="mt-9 border border-gray-200 p-4 rounded-lg hover:bg-gray-100 cursor-pointer hover:shadow-lg"
            onClick={() => setSelectedRole(role)}
          >
            <div className="flex justify-between">
              <div className="w-full flex items-center gap-2">
                <div className="h-14 bg-gray-200 rounded-lg w-14"></div>
                <h1 className="text-xl font-semibold">{role.title}</h1>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-2 mt-5 text-sm">
              <p className="text-gray-500">
                <span className="font-semibold">Next Action: </span>
                {role.nextAction}
              </p>
              <p className="text-black text-semibold bg-gray-300 rounded-full px-3 py-1 border-black border ">
                {role.status}
              </p>
            </div>
            <div className="text-sm pl-4 mt-10">
              <h2 className="font-bold">Details</h2>
              <p className="text-justify">{role.description}</p>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="flex flex-row gap-4 w-1/2 text-gray-400 ">
              <h2
                className={`text-xl font-semibold cursor-pointer
            ${optionSelected === "Active Roles" ? "text-gray-600" : ""}`}
                onClick={() => setOptionSelected("Active Roles")}
              >
                Open Roles
              </h2>
              <h2
                className={`text-xl font-semibold cursor-pointer
            ${optionSelected === "Inactive Roles" ? "text-gray-600" : ""}`}
                onClick={() => setOptionSelected("Inactive Roles")}
              >
                Closed Roles
              </h2>
            </div>
          </div>
          {optionSelected === "Active Roles" && (
            <div className="flex flex-col gap-4 mt-10">
              {activeRoles.map((role) => (
                <div className="w-full border border-gray-200 p-4 hover:bg-gray-100 cursor-pointer">
                  <div className="flex flex-col">
                    <div className="flex justify-between w-full">
                      <div className="flex gap-2 w-1/2 items-center">
                        <div className="h-14 bg-gray-200 rounded-lg w-24"></div>
                        <div>
                          <h3 className="text-md mt-0">{role.title}</h3>
                          <p className="text-gray-500">{role.uploadedby}</p>
                        </div>
                      </div>
                      <BiDotsVerticalRounded />
                    </div>
                    <div className="flex flex-row justify-between gap-2 mt-5 text-sm">
                      <p className="text-gray-500">
                        <span className="font-semibold">Next Action: </span>
                        {role.nextAction}
                      </p>
                      <p className="text-black text-semibold bg-gray-300 rounded-full px-3 py-1 border-black border ">
                        Marked as Complete
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {optionSelected === "Inactive Roles" && (
            <div className="flex flex-col gap-4 mt-10">
              {inactiveRoles.map((role) => (
                <div className="w-full border border-gray-200 p-4">
                  <div className="flex flex-col">
                    <div className="flex justify-between w-full">
                      <div className="flex gap-2 w-1/2 items-center">
                        <div className="h-14 bg-gray-200 rounded-lg w-24"></div>
                        <div>
                          <h3 className="text-md mt-0">{role.title}</h3>
                          <p className="text-gray-500">{role.uploadedby}</p>
                        </div>
                      </div>
                      <BiDotsVerticalRounded />
                    </div>
                    <div className="flex flex-row justify-between gap-2 mt-5 text-sm">
                      <p className="text-gray-500">
                        <span className="font-semibold">Next Action: </span>
                        {role.nextAction}
                      </p>
                      <p className="text-black text-semibold bg-gray-300 rounded-full px-3 py-1 border-black border ">
                        25 candidates
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-3xl font-semi bold text-left">Roles</h1>
            <div
              className="mt-9 border border-gray-200 p-5 rounded-lg hover:bg-gray-100 cursor-pointer hover:shadow-lg"
              onClick={() => setSelectedRole(role)}
            >
              <div className="flex justify-between">
                <div className="w-full flex flex-col items-left gap-2">
                  <p className="text-green-600">{role.status}</p>
                  <h1 className="text-xl font-semibold">{role.title}</h1>
                  <p className="text-gray-500">{role.uploadedby}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <button className="text-gray-500 hover:text-gray-900 text-sm border border-black px-3 py-1 rounded-md w-36 hover:bg-slate-400">
                    Post Role
                  </button>
                  <BsShare />
                  <BiDotsVerticalRounded />
                </div>
              </div>
              <div className="flex flex-row justify-between gap-2 mt-5 text-sm">
                <p className="text-gray-500">
                  <span className="font-semibold">Next Action: </span>
                  {role.nextAction}
                </p>
              </div>
              <div className="mt-10">
                <h2 className="font-bold text-md">About the Role</h2>
                <p className="text-justify text-sm mt-3 text-gray-500">
                  {role.description}
                </p>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="flex flex-row gap-4 w-1/2 text-gray-400 ">
                <h2
                  className={`text-xl font-semibold cursor-pointer
            ${optionSelected === "Active Roles" ? "text-gray-600" : ""}`}
                  onClick={() => setOptionSelected("Active Roles")}
                >
                  Active Candidates
                </h2>
                <h2
                  className={`text-xl font-semibold cursor-pointer
            ${optionSelected === "Inactive Roles" ? "text-gray-600" : ""}`}
                  onClick={() => setOptionSelected("Inactive Roles")}
                >
                  Inactive Candidates
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <KanbanBoard />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Candidates = () => {
  const [showAddCandidate, setShowAddCandidate] = useState(false);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showEmailModal1, setShowEmailModal1] = useState(false);
  const [showEmailModal2, setShowEmailModal2] = useState(false);
  const [selectedRole, setselectedRole] = useState("");
  const [emailToSend, setEmailToSend] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [availability, setAvailability] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState("");
  const [templates, setTemplates] = useState([
    "Template 1",
    "Template 2",
    "Template 3",
    "Template 4",
  ]);

  const [optionSelected, setOptionSelected] = useState("Active Roles");
  return selectedRole ? (
    <div className="p-20 bg-white h-screen w-full overflow-y-auto z-1">
      <RoleDescription role={selectedRole} />
    </div>
  ) : (
    <div className="p-20 bg-white h-screen w-full overflow-y-auto z-1">
      <div>
        <h1 className="text-3xl font-semi bold text-left">Roles</h1>
      </div>
      <div className="mt-9">
        <h2 className="text-xl text-gray-600 font-semibold">Labels</h2>
        <div className="flex mt-8 gap-5">
          <div className="tile w-1/4 p-4 border border-gray-200">
            <div className="flex justify-between">
              <div className="h-14 bg-gray-200 rounded-lg w-1/4"></div>
              <BiDotsVerticalRounded />
            </div>
            <h3 className="text-lg mt-4">Senior Developer</h3>
          </div>
          <div className="tile w-1/4 p-4 border border-gray-200">
            <div className="flex justify-between">
              <div className="h-14 bg-gray-200 rounded-lg w-1/4"></div>
              <BiDotsVerticalRounded />
            </div>
            <h3 className="text-lg mt-4">Senior Developer</h3>
          </div>
          <div className="tile w-1/4 p-4 border border-gray-200">
            <div className="flex justify-between">
              <div className="h-14 bg-gray-200 rounded-lg w-1/4"></div>
              <BiDotsVerticalRounded />
            </div>
            <h3 className="text-lg mt-4">Senior Developer</h3>
          </div>
          <div className="tile w-1/4 p-4 border border-gray-200">
            <div className="flex justify-between">
              <div className="h-14 bg-gray-200 rounded-lg w-1/4"></div>
              <BiDotsVerticalRounded />
            </div>
            <h3 className="text-lg mt-4">Senior Developer</h3>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="flex flex-row gap-4 w-1/2 text-gray-400 ">
            <h2
              className={`text-xl font-semibold cursor-pointer
            ${optionSelected === "Active Roles" ? "text-gray-600" : ""}`}
              onClick={() => setOptionSelected("Active Roles")}
            >
              Open Roles
            </h2>
            <h2
              className={`text-xl font-semibold cursor-pointer
            ${optionSelected === "Inactive Roles" ? "text-gray-600" : ""}`}
              onClick={() => setOptionSelected("Inactive Roles")}
            >
              Closed Roles
            </h2>
          </div>
        </div>
        {optionSelected === "Active Roles" && (
          <div className="flex flex-col gap-4 mt-10">
            {activeRoles.map((role) => (
              <div
                className="w-full border border-gray-200 p-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => setselectedRole(role)}
              >
                <div className="flex flex-col">
                  <div className="flex justify-between w-full">
                    <div className="flex gap-2 w-1/2 items-center">
                      <div className="h-14 bg-gray-200 rounded-lg w-24"></div>
                      <div>
                        <h3 className="text-md mt-0">{role.title}</h3>
                        <p className="text-gray-500">{role.uploadedby}</p>
                      </div>
                    </div>
                    <BiDotsVerticalRounded />
                  </div>
                  <div className="flex flex-row justify-between gap-2 mt-5 text-sm">
                    <p className="text-gray-500">
                      <span className="font-semibold">Next Action: </span>
                      {role.nextAction}
                    </p>
                    <p className="text-black text-semibold bg-gray-300 rounded-full px-3 py-1 border-black border ">
                      {role.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {optionSelected === "Inactive Roles" && (
          <div className="flex flex-col gap-4 mt-10">
            {inactiveRoles.map((role) => (
              <div
                className="w-full border border-gray-200 p-4"
                onClick={() => setselectedRole(role)}
              >
                <div className="flex flex-col">
                  <div className="flex justify-between w-full">
                    <div className="flex gap-2 w-1/2 items-center">
                      <div className="h-14 bg-gray-200 rounded-lg w-24"></div>
                      <div>
                        <h3 className="text-md mt-0">{role.title}</h3>
                        <p className="text-gray-500">{role.uploadedby}</p>
                      </div>
                    </div>
                    <BiDotsVerticalRounded />
                  </div>
                  <div className="flex flex-row justify-between gap-2 mt-5 text-sm">
                    <p className="text-gray-500">
                      <span className="font-semibold">Next Action: </span>
                      {role.nextAction}
                    </p>
                    <p className="text-black text-semibold bg-gray-300 rounded-full px-3 py-1 border-black border ">
                      {role.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showAddCandidate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
      {showBulkActions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
      <Modal
        show={showAddCandidate}
        onHide={() => setShowAddCandidate(false)}
        centered
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/2 shadow-xl z-50 bg-white p-10"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-xl justify-between flex items-center p-0">
            <p>Add Candidate</p>
            <button
              onClick={() => setShowAddCandidate(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              x
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-6">
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="font-bold">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="font-bold">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 border-gray-300 p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-6">
                <div className="flex flex-col gap-4 w-1/2">
                  <label className="font-bold">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border-2 border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-4 w-1/2">
                  <label className="font-bold">Position</label>
                  <input
                    type="text"
                    placeholder="Enter Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="border-2 border-gray-300 p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-6">
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="font-bold">Location</label>
                  <input
                    type="text"
                    placeholder="Enter Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border-2 border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="font-bold">Availability</label>
                  <input
                    type="date"
                    placeholder="Enter Availability"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="border-2 border-gray-300 p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Resume</label>
                <input
                  type="file"
                  value={file}
                  onChange={(e) => setFile(e.target.value)}
                  className="border-2 border-gray-300 p-2 rounded-md h-28"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setShowAddCandidate(false)}
            className="border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full mt-10"
          >
            Add Candidate
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showBulkActions}
        onHide={() => setShowBulkActions(false)}
        centered
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/2 shadow-xl z-50 bg-white p-10"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-xl justify-between flex items-center p-0">
            <div>
              <h1 className="text-xl">Bulk Actions</h1>
              <p className="text-gray-500 text-sm">Select the bulk actions</p>
            </div>
            <button
              onClick={() => setShowBulkActions(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              x
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2">
            <button
              className="border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full mt-1"
              onClick={() => setShowEmailModal1(true)}
            >
              Send Email
            </button>
            <button
              className="border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full mt-0"
              onClick={() => setShowAddCandidate(true)}
            >
              Add Selected Candidates to Job
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showEmailModal1}
        onHide={() => setShowEmailModal1(false)}
        centered
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/2 shadow-xl z-50 bg-white p-10"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="text-xl">Send Email</h1>
            <p className="text-gray-500">Select the template</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2">
            <select className="border-2 border-gray-300 p-2 rounded-md">
              {templates.map((template) => (
                <option value={template}>{template}</option>
              ))}
            </select>
            <button
              className="border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full mt-1"
              onClick={() => {
                setShowEmailModal1(false);
                setShowEmailModal2(true);
              }}
            >
              Send Email
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showEmailModal2}
        onHide={() => setShowEmailModal2(false)}
        centered
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/2 shadow-xl z-50 bg-white p-10"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="text-xl">Send Email</h1>
            <p className="text-gray-500">Email Template</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2">
            <textarea
              className="border-2 border-gray-300 p-2 rounded-md h-28"
              value={emailToSend}
              onChange={(e) => setEmailToSend(e.target.value)}
            ></textarea>

            <button
              className="border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full mt-1"
              onClick={() => setShowEmailModal2(false)}
            >
              Send Email
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Candidates;
