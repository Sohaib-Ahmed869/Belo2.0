import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const initialState = {
  firstName: "Emily",
  lastName: "Johnson",
  email: "emily@example.com",
  phoneNumber: "+1 555 555 1111",
  password: "*************",
  darkMode: false,
  notifications: {
    comments: true,
    candidates: true,
    taskReminders: true,
  },
};

const Profile = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setState((prevState) => ({
        ...prevState,
        notifications: {
          ...prevState.notifications,
          [name]: checked,
        },
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleDarkModeToggle = () => {
    setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", state);
  };

  return (
    <div className="py-8 mx-auto w-full max-w-6xl px-10 relative">
      <h1 className="text-2xl mb-4">Settings</h1>
      <p className="text-gray-500">
        Manage your account settings and preferences
      </p>

      <div className="mt-8">
        <h2 className="text-xl mb-4">Profile</h2>
        <div className="flex items-center mb-4">
          <div className="w-24 h-24 rounded-full bg-gray-200 mr-4"></div>
          <div className="flex flex-col gap-2">
            <button className="bg-black text-xs text-white px-3 py-2 rounded-full mr-2 w-full">
              Upload Image
            </button>
            <button className="bg-gray-300 text-xs px-3 py-2 rounded-full w-full">
              Delete Image
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={state.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={state.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <a href="#" className="text-blue-500 text-sm mt-2 block">
                  Change Email <FaEdit className="inline-block" />
                </a>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={state.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <a href="#" className="text-blue-500 text-sm mt-2 block">
                  Change Number <FaEdit className="inline-block" />
                </a>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <a href="#" className="text-blue-500 text-sm mt-2 block">
                  Change Password <FaEdit className="inline-block" />
                </a>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Switch to Darkmode</h2>
            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-gray-100">
              <span>Enable/Disable Darkmode</span>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={state.darkMode}
                    onChange={handleDarkModeToggle}
                    className="sr-only"
                  />
                  <div className="w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>
                  <div
                    className={`dot absolute w-6 h-6  rounded-full shadow -left-1 -top-1 transition ${
                      state.darkMode
                        ? "transform translate-x-full bg-black"
                        : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Email & Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="comments"
                  checked={state.notifications.comments}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <label className="ml-2">Comments</label>
                <span className="ml-4 text-gray-500">
                  Get notification when someone posted a comment or note
                </span>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="candidates"
                  checked={state.notifications.candidates}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <label className="ml-2">Candidates</label>
                <span className="ml-4 text-gray-500">
                  Get notification when a candidate applies for a job
                </span>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="taskReminders"
                  checked={state.notifications.taskReminders}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <label className="ml-2">Task Reminders</label>
                <span className="ml-4 text-gray-500">
                  Get notification to remind about tasks
                </span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-full"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
