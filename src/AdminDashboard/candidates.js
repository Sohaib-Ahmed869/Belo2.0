import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { Modal } from "react-bootstrap";

const candidates = [
  {
    firstname: "jon",
    lastname: "doe",
    email: "jdoe@gmail.com",
    phone: "1234567890",
    position: "Series Producer",
    location: "New York",
  },
  {
    firstname: "jon",
    lastname: "doe",
    email: "jdoe@gmail.com",
    phone: "1234567890",
    position: "Researcher",
    location: "New York",
  },
  {
    firstname: "jon",
    lastname: "doe",
    email: "jdoe@gmail.com",
    phone: "1234567890",
    position: "Executive Producer",
    location: "New York",
  },
  {
    firstname: "jon",
    lastname: "doe",
    email: "jdoe@gmail.com",
    phone: "1234567890",
    position: "Line Producer",
    location: "New York",
  },
];

const Candidates = () => {
  const [showAddCandidate, setShowAddCandidate] = useState(false);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showEmailModal1, setShowEmailModal1] = useState(false);
  const [showEmailModal2, setShowEmailModal2] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState("");
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
  return selectedCandidate ? (
    <div className="p-20 bg-white h-screen w-full overflow-y-auto z-1"></div>
  ) : (
    <div className="p-10 bg-white h-screen w-full overflow-y-auto z-1">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-semi bold text-left">Candidates</h1>
          <p className="text-gray-500 text-left">
            Below is the summary of all candidates
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="border-2 border-gray-600 text-black px-5 py-2 rounded-md hover:bg-gray-600 hover:text-white flex items-center gap-2"
            onClick={() => setShowAddCandidate(true)}
          >
            <BsPlus className="inline-block" />
            Add Candidate
          </button>
          <button
            className="border-2 border-gray-600 text-black px-5 py-2 rounded-md hover:bg-gray-600 hover:text-white"
            onClick={() => setShowBulkActions(true)}
          >
            Bulk Actions
          </button>
        </div>
      </div>
      <div className="table w-full mt-2 border rounded-md p-5 shadow-lg">
        <h1 className="text-2xl font-semibold">All Candidates</h1>
        <table className="w-full border-none mt-2">
          <tr className="text-left">
            <th className="font-semibold text-gray-600 p-4"></th>
            <th className="font-semibold text-gray-600 p-4">FIRST NAME</th>
            <th className="font-semibold text-gray-600">LAST NAME</th>
            <th className="font-semibold text-gray-600">POSITION</th>
            <th className="font-semibold text-gray-600">EMAIL</th>
            <th className="font-semibold text-gray-600 text-center">
              LOCATION
            </th>
            <th className="w-16 text-center"></th>
          </tr>
          {candidates.map((task) => (
            <tr
              className="items-center justify-center bg-gray-50 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSelectedCandidate(task)}
            >
              <td className="text-center">
                <input type="checkbox" />
              </td>

              <td>{task.firstname}</td>
              <td>{task.lastname}</td>
              <td>{task.position}</td>
              <td>{task.email}</td>
              <td>{task.location}</td>

              <td className="w-24 text-center flex justify-center items-center p-5">
                <MdDelete className="text-red-500" />
              </td>
            </tr>
          ))}
        </table>
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
