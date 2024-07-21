import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import "react-calendar/dist/Calendar.css";
import tick from "../../Assets/tick.png";
import pdf from "../../Assets/pdf.png";
import pfp from "../../Assets/pfp.png";

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

const HiringCandidates = () => {
  const [showAddCandidate, setShowAddCandidate] = useState(false);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showEmailModal1, setShowEmailModal1] = useState(false);
  const [showEmailModal2, setShowEmailModal2] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [emailToSend, setEmailToSend] = useState("");
  const [showAddtoJob, setShowAddtoJob] = useState(false);
  const [addNoteModal, setAddNoteModal] = useState(false);
  const [showAddSuccess, setShowAddSuccess] = useState(false);
  const [emailHasbeenSent, setEmailHasBeenSent] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [ScheduleInterview, setScheduleInterview] = useState(false);

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
    <div className="py-8 w-full  px-10 relative">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-semi bold text-left">Candidates</h1>
          <p className="text-gray-500 text-left mt-2">
            Candidates {">"} <span className="text-blue-400">Profile</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="bg-blue-400 text-white px-5 py-2 rounded-md hover:bg-blue-600 hover:text-white flex items-center gap-2"
            onClick={() => setShowAddtoJob(true)}
          >
            <BsPlus className="inline-block" size={20} />
            Add to Another Job
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-5 mt-5 w-2/3">
          <div className="border rounded-md p-5">
            <div className="flex items-center">
              <img src={pdf} alt="pdf" className="w-30" />
              <div className="flex flex-col gap-2 ml-10 w-full">
                <div className="flex justify-end items-center gap-4">
                  <button
                    className="border border-gray-600 text-black px-8 py-2 rounded-md text-sm hover:bg-gray-600 hover:text-white"
                    onClick={() => setShareModal(true)}
                  >
                    Share
                  </button>
                  <BiDotsVerticalRounded
                    size={30}
                    className="text-gray-500 cursor-pointer"
                  />
                </div>

                <h1 className="text-2xl font-semibold">
                  {selectedCandidate.firstname} {selectedCandidate.lastname}
                </h1>
                <p className="text-gray-500 font-semibold">
                  {selectedCandidate.position}
                </p>
                <div className="flex items-center gap-2">
                  <GoLocation className="text-blue-400" />
                  <p className="text-gray-500">{selectedCandidate.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 bg-gray-100 p-2 rounded-md">
                    Candidate Tag
                  </p>
                  <p className="text-gray-500 bg-gray-100 p-2 rounded-md">
                    Candidate Tag
                  </p>
                  <p className="text-gray-500 bg-gray-100 p-2 rounded-md">
                    Candidate Tag
                  </p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <BiPhone className="text-blue-400" />
                      <p className="text-gray-500">{selectedCandidate.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <AiOutlineMail className="text-blue-400" />
                      <p className="text-gray-500">{selectedCandidate.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="border bg-gray-200 border-gray-600 text-black px-8 py-2 rounded-md text-sm hover:bg-gray-600 hover:text-white">
                      View CV
                    </button>
                    <button className="border bg-gray-200 border-gray-600 text-black px-8 py-2 text-sm rounded-md hover:bg-gray-600 hover:text-white">
                      Email
                    </button>
                  </div>
                </div>

                <p className="text-gray-500">
                  {selectedCandidate.availability}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 mt-5 border-t pt-5">
              <div>
                <h1 className="text-sm text-blue-400">Location</h1>
                <p className="text-gray-800 font-semibold text-lg">
                  {selectedCandidate.location}
                </p>
              </div>
              <div className="ml-20">
                <h1 className="text-sm text-blue-400">Availability</h1>
                <p className="text-gray-800 font-semibold text-lg">
                  12/12/2021
                </p>
              </div>
              <div className="ml-20">
                <h1 className="text-sm text-blue-400">Porfolio</h1>
                <p className="text-gray-800 font-semibold text-lg">
                  talentmanager.com/example
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Feedback</h1>
          </div>
          <div className="border rounded-md p-5">
            <div className="p-10 flex items-center justify-center gap-10">
              <p className="text-blue-500 border border-blue-500 p-3 px-6 rounded-md">
                Yes
              </p>
              <p className="text-blue-500 border border-blue-500 p-3 px-6 rounded-md">
                No
              </p>
              <p className="text-blue-500 border border-blue-500 p-3 px-6 rounded-md">
                Maybe
              </p>
            </div>
            <div className="flex items-center ml-5">
              <img src={pfp} alt="pfp" className="w-8 h-8 rounded-full" />
              <p className="text-gray-900 font-semibold ml-3">
                Hiring Manager Name
              </p>
            </div>
            <div className="flex flex-col ml-5 mt-5">
              <p className="text-gray-700 font-semibold">Leave Feedback</p>
              <textarea
                type="text"
                placeholder="Enter your feedback here..."
                className="border-2 border-gray-300 bg-gray-50 p-2 rounded-md w-full h-20 mt-4"
              />
              <button
                className="border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full mt-5"
                onClick={() => setFeedbackModal(true)}
              >
                Leave Feedback
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-5 w-1/3 border p-5">
          <div className="flex items-center justify-between ">
            <h1 className="text-xl font-semibold">Notes</h1>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setAddNoteModal(true)}
            >
              <BsPlus className="rounded-full border-green-400 border text-green-400" />
              <p className="text-green-400">Add Note</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="bg-gray-100 p-5 rounded-md">
              Lorem ipsum dolor amet consectetur, adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="mt-5">
            <div className="bg-gray-100 p-5 rounded-md">
              Lorem ipsum dolor amet consectetur, adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="mt-5">
            <div className="bg-gray-100 p-5 rounded-md">
              Lorem ipsum dolor amet consectetur, adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="mt-5 border-t pt-5">
            <h1 className="text-2xl font-semibold">Inteviews</h1>
            <div className="mt-4">
              <h1 className="text-xl font-semibold">Researcher</h1>
              <p className="text-md text-gray-600">Betty</p>
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-semibold">Researcher</h1>
              <p className="text-md text-gray-600">Arbab</p>
            </div>
            <button
              className=" hover:bg-gray-400 hover:text-white px-5 py-2 rounded-full bg-transparent text-black border border-black w-full mt-5"
              onClick={() => setScheduleInterview(true)}
            >
              Schedule an Interview
            </button>
          </div>
        </div>
      </div>
      {addNoteModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setAddNoteModal(false)}
        ></div>
      )}

      {showAddtoJob && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowAddtoJob(false)}
        ></div>
      )}

      {showAddSuccess && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowAddSuccess(false)}
        ></div>
      )}

      {emailHasbeenSent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setEmailHasBeenSent(false)}
        ></div>
      )}

      {shareModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShareModal(false)}
        ></div>
      )}

      {feedbackModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setFeedbackModal(false)}
        ></div>
      )}

      {ScheduleInterview && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setScheduleInterview(false)}
        ></div>
      )}

      <Modal
        show={addNoteModal}
        onHide={() => setAddNoteModal(false)}
        centered
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/2 shadow-xl z-50 bg-white p-10"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="text-xl">Add Note</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2">
            <textarea
              className="border-2 border-gray-300 p-2 rounded-md h-28"
              placeholder="Enter Note..."
            ></textarea>

            <button
              className="border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full mt-1"
              onClick={() => setAddNoteModal(false)}
            >
              Submit
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showAddtoJob}
        onHide={() => setShowAddtoJob(false)}
        centered
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/2 shadow-xl z-50 bg-white p-10"
      >
        <Modal.Header className="flex justify-between">
          <Modal.Title className="text-xl">Add Candidates to Job</Modal.Title>
          <button
            onClick={() => setShowAddtoJob(false)}
            className="text-gray-600 hover:text-gray-900"
          >
            x
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-row justify-between items-center gap-6 mt-10">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="font-bold">Select Job</label>
              <select className="border-2 border-gray-300 p-2 rounded-md">
                <option value="job1">Job 1</option>
                <option value="job2">Job 2</option>
                <option value="job3">Job 3</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="font-bold">Status</label>
              <select className="border-2 border-gray-300 p-2 rounded-md">
                <option value="job1">Shortlisted</option>
                <option value="job2">Interviewed</option>
                <option value="job3">Rejected</option>
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => {
              setShowAddtoJob(false);
              setShowAddSuccess(true);
            }}
            className="border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full mt-10"
          >
            Add Candidates
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showAddSuccess}
        onHide={() => setShowAddSuccess(false)}
        centered
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/3 shadow-xl z-50 bg-white p-10"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2 items-center">
            <img src={tick} alt="tick" className="w-20" />
            <p className="text-gray-900 text-lg mt-5">
              Successfully added to postion
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => {
              setShowAddSuccess(false);
              setEmailHasBeenSent(true);
            }}
            className="border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full mt-10"
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={emailHasbeenSent}
        onHide={() => setEmailHasBeenSent(false)}
        centered
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/3 shadow-xl z-50 bg-white p-10"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2 items-center">
            <img src={tick} alt="tick" className="w-20" />
            <p className="text-gray-900 text-lg mt-5">
              Email has been sent successfully
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setEmailHasBeenSent(false)}
            className="border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full mt-10"
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={feedbackModal}
        onHide={() => setFeedbackModal(false)}
        centered
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/3 shadow-xl z-50 bg-white p-10"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2 items-center">
            <img src={tick} alt="tick" className="w-20" />
            <p className="text-gray-900 text-lg mt-5">Submit Feedback</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setFeedbackModal(false)}
            className="border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full mt-10"
          >
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={shareModal}
        onHide={() => setShareModal(false)}
        centered
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl w-1/3 shadow-xl z-50 bg-white p-5"
      >
        <Modal.Header className="flex justify-between">
          <Modal.Title>
            <h1 className="text-lg">Share this Candidate</h1>
          </Modal.Title>
          <button
            onClick={() => setShareModal(false)}
            className="text-gray-600 hover:text-gray-900"
          >
            x
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2 mt-10">
            <textarea
              className="border-2 border-gray-300 p-2 rounded-md h-28"
              placeholder="Enter Email..."
            ></textarea>
            <button
              className="mt-10 border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full"
              onClick={() => setShareModal(false)}
            >
              Share
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={ScheduleInterview}
        onHide={() => setScheduleInterview(false)}
        centered
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/3 shadow-xl z-50 bg-white p-5"
      >
        <Modal.Header closeButton>What Would Work Best For You?</Modal.Header>
        <Modal.Body className="mt-10">
          <div className="flex ">
            <div className="w-1/3 flex flex-col border-2 border-gray-200">
              {[
                "Today",
                "11:00 AM",
                "12:00 PM",
                "1:00 PM",
                "2:00 PM",
                "3:00 PM",
                "4:00 PM",
              ].map((time) => (
                <button className="p-2 text-left w-full mt-2">{time}</button>
              ))}
            </div>
            <Calendar className="w-2/3 border-0" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => {
              setScheduleInterview(false);
            }}
            className="border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full mt-10"
          >
            Schedule Interview
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  ) : (
    <div className="py-8 w-full  px-10 relative">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-semi bold text-left">Candidates</h1>
          <p className="text-gray-500 text-left mt-2">
            Below is the summary of all candidates
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="bg-blue-400 text-white px-5 py-2 rounded-md hover:bg-blue-600 hover:text-white flex items-center gap-2"
            onClick={() => setShowAddCandidate(true)}
          >
            <BsPlus className="inline-block" size={20} />
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
      <div className="table w-full mt-5 border rounded-md p-5 shadow-lg">
        <h1 className="text-2xl font-semibold">All Candidates</h1>
        <table className="w-full border-none mt-2">
          <tr className="text-left">
            <th className="font-semibold text-blue-500 p-4"></th>
            <th className="font-semibold text-blue-500 p-4">FIRST NAME</th>
            <th className="font-semibold text-blue-500">LAST NAME</th>
            <th className="font-semibold text-blue-500">POSITION</th>
            <th className="font-semibold text-blue-500">EMAIL</th>
            <th className="font-semibold text-blue-500">LOCATION</th>
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
      {showEmailModal1 && (
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
                <label className="font-bold">Upload CV</label>
                <div className="border-2 border-gray-300 p-2 rounded-md h-28 border-dashed items-center flex flex-col justify-center">
                  <input
                    type="file"
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                    className="ml-14"
                  />
                  <p>
                    <span className="text-blue-400">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-gray-500 text-sm">PDF Files Only</p>
                </div>
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
              onClick={() => setShowAddtoJob(true)}
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

      <Modal
        show={showAddtoJob}
        onHide={() => setShowAddtoJob(false)}
        centered
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-2xl w-1/2 shadow-xl z-50 bg-white p-10"
      >
        <Modal.Header className="flex justify-between">
          <Modal.Title className="text-xl">Add Candidates to Job</Modal.Title>
          <button
            onClick={() => setShowAddtoJob(false)}
            className="text-gray-600 hover:text-gray-900"
          >
            x
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-row justify-between items-center gap-6 mt-10">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="font-bold">Select Job</label>
              <select className="border-2 border-gray-300 p-2 rounded-md">
                <option value="job1">Job 1</option>
                <option value="job2">Job 2</option>
                <option value="job3">Job 3</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="font-bold">Status</label>
              <select className="border-2 border-gray-300 p-2 rounded-md">
                <option value="job1">Shortlisted</option>
                <option value="job2">Interviewed</option>
                <option value="job3">Rejected</option>
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setShowAddtoJob(false)}
            className="border-0 bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white w-full mt-10"
          >
            Add Candidates
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HiringCandidates;
