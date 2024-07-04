import React from "react";

const content = {
  title: "",
  link: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube link
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.`
};

const SubBilling = () => {
  return (
    <div className="py-8 mx-auto w-full max-w-6xl px-10 relative">
      <h1 className="text-3xl mb-4">Subscription & Billing</h1>
      <h2 className="text-xl mb-4">{content.title}</h2>
      <div className="mb-6 flex itmes-center justify-center">
        <iframe
          className="w-2/3 h-96 rounded-xl"
          src={content.link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-gray-700">{content.description}</p>
    </div>
  );
};

export default SubBilling;
