import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import dashboard from "../Assets/dashboard.png";
import profilepic from "../Assets/profilepic.png";
const data = [
  {
    title: "New Candidates",
    value: "12",
  },
  {
    title: "Open Roles",
    value: "5",
  },
  {
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
const Dashboard = () => {
  const [activitiesDates, setActivitiesDates] = useState([]);

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

  return (
    <div className="py-8 mx-auto w-full max-w-6xl px-10 relative">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="text-gray-500">
        Below is the summary of your team activity
      </p>
      <div className="flex flex-row gap-5 mt-5">
        {data.map((item) => (
          <div className="flex  w-1/4 p-5 rounded-lg shadow-md items-center gap-5">
            <div>
              <img
                src={dashboard}
                alt="dashboard"
                className="w-10 p-2 bg-slate-100 rounded-full"
              />
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
        <h1 className="text-2xl font-semibold">Tasks List</h1>
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
                      ? "text-green-900 font-bold text-sm bg-green-300 p-2 rounded-full text-center"
                      : "text-red-900 font-bold text-sm bg-red-300 p-2 rounded-full text-center"
                  }`}
                >
                  {task.Status}
                </div>
              </td>
              <td className="w-24 text-center flex justify-center items-center p-5">
                <BiDotsVerticalRounded />
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
                className="text-sm font-semibold  w-24 text-center"
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
                className="text-sm font-semibold  w-24 text-center"
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
    </div>
  );
};

export default Dashboard;
