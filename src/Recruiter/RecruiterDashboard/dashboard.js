import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import archivedJobs from "../../Assets/archivedJobs.png";
import newCandidates from "../../Assets/newCandidates.png";
import openRoles from "../../Assets/openRoles.png";
import filtericon from "../../Assets/filtericon.png";
import { BsPlus } from "react-icons/bs";
import { Modal } from "react-bootstrap";

import profilepic from "../../Assets/profilepic.png";
const data = [
  {
    image: newCandidates,
    title: "New Candidates",
    value: "12",
  },
  {
    image: openRoles,
    title: "Open Roles",
    value: "5",
  },
  {
    image: archivedJobs,
    title: "Archived Jobs",
    value: "8",
  },
];

const TaskList = [
  {
    taskname: "Task 1",
    createdby: "Admin",
    createdOn: "12/12/2021",
    Reminder: "12/12/2021",
    Status: "In Progress",
  },
  {
    taskname: "Task 1",
    createdby: "Admin",
    createdOn: "12/12/2021",
    Reminder: "12/12/2021",
    Status: "Completed",
  },
  {
    taskname: "Task 1",
    createdby: "Admin",
    createdOn: "12/12/2021",
    Reminder: "12/12/2021",
    Status: "Completed",
  },
  {
    taskname: "Task 1",
    createdby: "Admin",
    createdOn: "12/12/2021",
    Reminder: "12/12/2021",
    Status: "In Progress",
  },
];

const activities = [
  {
    by: "John Doe",
    activity: "comment",
    post: "Development",
    date: "12/12/2021",
    time: "12:00 AM",
  },
  {
    by: "Jane Doe",
    activity: "comment",
    post: "Development",
    date: "13/12/2021",
    time: "12:00 PM",
  },
  {
    by: "John Doe",
    activity: "comment",
    post: "Development",
    date: "14/12/2021",
    time: "11:00 AM",
  },
];

const messages = [
  {
    by: "John Doe",
    message: "Hello",
    date: "12/12/2021",
  },
  {
    by: "Jane Doe",
    message: "Hello",
    date: "12/12/2021",
  },
  {
    by: "John Doe",
    message: "Hello",
    date: "12/12/2021",
  },
];

const RecruiterDashboard = () => {
  const [activitiesDates, setActivitiesDates] = useState([]);

  const [addTaskModal, setAddTaskModal] = useState(false);
  const [editTaskModal, setEditTaskModal] = useState(false);

  const [activeTimeOption, setActiveTimeOption] = useState("AM");

  const [reminderChecked, setReminderChecked] = useState(false);
  const [editModalReminderChecked, setEditModalReminderChecked] =
    useState(false);

  useEffect(() => {
    const uniqueDates = [
      ...new Set(activities.map((activity) => activity.date)),
    ];
    setActivitiesDates(uniqueDates);
  }, [activities]);

  const [messagesDates, setMessagesDates] = useState(
    messages.map((message) => message.date)
  );

  useEffect(() => {
    const uniqueDates = [...new Set(messages.map((message) => message.date))];
    setMessagesDates(uniqueDates);
  }, [messages]);

  useEffect(() => {
    console.log(activeTimeOption);
  }, [activeTimeOption]);

  return (
    <div className="py-8 w-full  px-10 relative">
      <h1 className="text-3xl font-semi bold text-left">Dashboard</h1>
      <p className="text-gray-500 text-left">
        Below is the summary of your team activity
      </p>
      <div className="flex flex-row gap-5 mt-5">
        {data.map((item) => (
          <div className="flex  w-1/4 p-5 rounded-lg border border-blue-300 shadow-md items-center gap-5">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <img src={item.image} alt="dashboard" />
            </div>
            <div>
              <p className="text-gray-500">{item.title}</p>
              <p className="text-2xl font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold mt-10 mb-2">Tasks</h1>
      <div className="table w-full mt-2 border rounded-md p-5 shadow-lg">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold">Tasks List</h1>
          <button
            className="flex items-center bg-blue-400 text-white p-2 px-4 hover:bg-blue-500 ml-auto rounded-md"
            onClick={() => setAddTaskModal(true)}
          >
            <BsPlus size={20} />
            <p>Add Task</p>
          </button>
          <div className="flex items-center border border-gray-400 p-2 rounded-md  ml-3">
            <img src={filtericon} alt="filter" />
            <select className="focus:outline-none ml-2">
              <option value="All">Filters</option>
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>
        </div>
        <table className="w-full border-none mt-2">
          <tr className="text-left">
            <th className="font-semibold text-gray-600 p-4">TASK NAME</th>
            <th className="font-semibold text-gray-600">CREATED BY</th>
            <th className="font-semibold text-gray-600">CREATED ON</th>
            <th className="font-semibold text-gray-600">REMINDER</th>
            <th className="font-semibold text-gray-600 text-center">STATUS</th>
            <th className="w-16 text-center"></th>
          </tr>
          {TaskList.map((task) => (
            <tr className="items-center justify-center bg-gray-50">
              <td className="p-4">{task.taskname}</td>
              <td>{task.createdby}</td>
              <td>{task.createdOn}</td>
              <td>{task.Reminder}</td>
              <td>
                <div
                  className={`${
                    task.Status === "Completed"
                      ? "text-green-900 font-bold text-sm  p-1 rounded-full text-center bg-green-300"
                      : "text-red-900 font-bold text-sm p-1 rounded-full text-center bg-red-300"
                  }`}
                >
                  {task.Status}
                </div>
              </td>
              <td className="w-24 text-center flex justify-center items-center p-5">
                <BiDotsVerticalRounded
                  onClick={() => setEditTaskModal(true)}
                  className="cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="flex flex-row gap-5 mt-10 pb-20">
        <div className="w-1/2 border border-gray-400 rounded-xl p-2">
          {activitiesDates.map((date) => (
            <div className=" p-5 mt-2 flex flex-col justify-center items-center ">
              <div className="line h-1 w-full border-t-2 border-gray-300 border-dashed"></div>
              <h1
                className="text-sm font-semibold  w-24 text-center bg-white"
                style={{ marginTop: "-15px" }}
              >
                {date}
              </h1>
              {activities.map(
                (activity) =>
                  activity.date === date && (
                    <div className="flex flex-row gap-5 mt-2 items-center">
                      <img
                        src={profilepic}
                        alt="dashboard"
                        className="w-12 h-12 bg-slate-100 rounded-full"
                      />
                      <div className="flex flex-col gap-5 mt-2">
                        <div className="flex flex-row gap-2">
                          <p className="font-semibold">{activity.by}</p>
                          <p className=" text-gray-500">
                            has left a {activity.activity} on the post
                          </p>
                          <p className="font-semibold">{activity.post}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          ))}
        </div>
        <div className="w-1/2 border border-gray-400 rounded-xl p-2">
          {messagesDates.map((date) => (
            <div className=" p-5 mt-2 flex flex-col justify-center items-center ">
              <div className="line h-1 w-full border-t-2 border-gray-300 border-dashed"></div>
              <h1
                className="text-sm font-semibold  w-24 text-center bg-white"
                style={{ marginTop: "-15px" }}
              >
                {date}
              </h1>
              <div className="flex flex-col w-full">
                {messages.map(
                  (message) =>
                    message.date === date && (
                      <div className="flex flex-row gap-5 mt-2 items-center">
                        <img
                          src={profilepic}
                          alt="dashboard"
                          className="w-12 h-12 bg-slate-100 rounded-full"
                        />
                        <div className="flex flex-col gap-5 mt-2">
                          <div className="flex flex-row gap-2">
                            <p className="font-semibold">{message.by}</p>
                            <p className=" text-gray-500">has sent a message</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-sm">
                              {message.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {addTaskModal && (
        //show overlay
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
          onClick={() => setAddTaskModal(false)}
        ></div>
      )}
      {editTaskModal && (
        //show overlay
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
          onClick={() => setEditTaskModal(false)}
        ></div>
      )}
      <Modal
        show={addTaskModal}
        onHide={() => setAddTaskModal(false)}
        centered
        className="bg-white p-8 rounded-2xl w-2/5 shadow-xl z-50"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-2xl font-bold">Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-md text-gray-900 font-semibold">Task Name</p>
          <div className="w-full flex  items-center border border-gray-300 rounded-md p-2 mt-2">
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="Enter Task Name"
            />
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => setReminderChecked(e.target.checked)}
            />
            <p className="text-md font-semibold text-gray-800">Add Reminder</p>
          </div>
          {reminderChecked && (
            <div className="w-full flex  items-center gap-2 mt-4">
              <div className="w-1/3 ">
                <p className="text-lg font-semibold text-gray-900">Day</p>
                <input
                  type="date"
                  className="w-full focus:outline-none border border-gray-300 rounded-md p-2 mt-2"
                />
              </div>
              <div className="w-1/6">
                <p className="text-lg font-semibold text-gray-900">Hour</p>
                <input
                  type="text"
                  className="w-full focus:outline-none border border-gray-300 rounded-md p-2 mt-2"
                  placeholder="1"
                />
              </div>
              <div className="w-1/6">
                <p className="text-lg font-semibold text-gray-900">Minutes</p>
                <input
                  type="text"
                  className="w-full focus:outline-none border border-gray-300 rounded-md p-2 mt-2"
                  placeholder="00"
                />
              </div>
              <div className="w-1/4">
                <p className="text-lg text-white"> _</p>
                <div className="w-full flex  items-center border border-gray-300 rounded-md mt-2">
                  <div
                    className={`
                    w-1/2 text-center p-2 rounded-md
                    ${
                      activeTimeOption === "AM"
                        ? " text-white h-full bg-blue-400 cursor-pointer"
                        : " text-gray-600 h-full cursor-pointer"
                    }`}
                    onClick={() => setActiveTimeOption("AM")}
                  >
                    AM
                  </div>
                  <div
                    className={`
                    w-1/2 text-center p-2 rounded-md
                    ${
                      activeTimeOption === "PM"
                        ? " text-white bg-blue-400 h-full cursor-pointer"
                        : " text-gray-600 h-full cursor-pointer"
                    }`}
                    onClick={() => setActiveTimeOption("PM")}
                  >
                    PM
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-blue-400 text-white p-2 rounded-full w-full mt-10"
            onClick={() => setAddTaskModal(false)}
          >
            Add New Task
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={editTaskModal}
        onHide={() => setEditTaskModal(false)}
        centered
        className="bg-white p-8 rounded-2xl w-2/5 shadow-xl z-50"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-2xl font-bold">Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-md text-gray-900 font-semibold">Task Name</p>
          <div className="w-full flex  items-center border border-gray-300 rounded-md p-2 mt-2">
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="Enter Task Name"
            />
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => setEditModalReminderChecked(e.target.checked)}
            />
            <p className="text-md font-semibold text-gray-800">Add Reminder</p>
          </div>
          {editModalReminderChecked && (
            <div className="w-full flex  items-center gap-2 mt-4">
              <div className="w-1/3 ">
                <p className="text-lg font-semibold text-gray-900">Day</p>
                <input
                  type="date"
                  className="w-full focus:outline-none border border-gray-300 rounded-md p-2 mt-2"
                />
              </div>
              <div className="w-1/6">
                <p className="text-lg font-semibold text-gray-900">Hour</p>
                <input
                  type="text"
                  className="w-full focus:outline-none border border-gray-300 rounded-md p-2 mt-2"
                  placeholder="1"
                />
              </div>
              <div className="w-1/6">
                <p className="text-lg font-semibold text-gray-900">Minutes</p>
                <input
                  type="text"
                  className="w-full focus:outline-none border border-gray-300 rounded-md p-2 mt-2"
                  placeholder="00"
                />
              </div>
              <div className="w-1/4">
                <p className="text-lg text-white"> _</p>
                <div className="w-full flex  items-center border border-gray-300 rounded-md mt-2">
                  <div
                    className={`
                    w-1/2 text-center p-2 rounded-md
                    ${
                      activeTimeOption === "AM"
                        ? " text-white h-full bg-blue-400 cursor-pointer"
                        : " text-gray-600 h-full cursor-pointer"
                    }`}
                    onClick={() => setActiveTimeOption("AM")}
                  >
                    AM
                  </div>
                  <div
                    className={`
                    w-1/2 text-center p-2 rounded-md
                    ${
                      activeTimeOption === "PM"
                        ? " text-white bg-blue-400 h-full cursor-pointer"
                        : " text-gray-600 h-full cursor-pointer"
                    }`}
                    onClick={() => setActiveTimeOption("PM")}
                  >
                    PM
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-blue-400 text-white p-2 rounded-full w-full mt-10"
            onClick={() => setAddTaskModal(false)}
          >
            Add New Task
          </button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
};

export default RecruiterDashboard;
