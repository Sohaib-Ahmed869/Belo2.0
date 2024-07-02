import React from "react";
import dashboard from "../../Assets/dashboard.png";

const content = {
  title: "Connect all your favourite apps",
  link: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.`,
};

const apps = [
  {
    name: "Dropbox",
    logo: dashboard,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Dropbox",
    logo: dashboard,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Dropbox",
    logo: dashboard,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Dropbox",
    logo: dashboard,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Dropbox",
    logo: dashboard,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Dropbox",
    logo: dashboard,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

const UsingBelo = () => {
  return (
    <div className="py-8 mx-auto w-full max-w-6xl px-10 relative">
      <h1 className="text-3xl mb-4">Integration</h1>
      <h2 className="text-xl mb-4">{content.title}</h2>
      <p className="text-gray-700">{content.description}</p>
      <div className="mb-6 flex itmes-center justify-center mt-12 mb-12">
        <iframe
          className="w-2/3 h-96 rounded-xl"
          src={content.link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mx-24">
        <div className="grid grid-cols-3 gap-10">
          {apps.map((app, index) => (
            <div key={index} className=" p-4 rounded-lg shadow-md border border-gray-100">
              <img src={app.logo} alt={app.name} className="w-6 h-6 mb-1" />
              <h3 className="text-xl mb-2">{app.name}</h3>
              <p className="text-gray-700">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsingBelo;
