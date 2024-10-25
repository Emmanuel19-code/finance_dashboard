import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#000000] p-1 flex flex-col items-center justify-between w-14 h-screen">
        <div>

        </div>
      <div>
        <img
          src="user.png"
          alt=""
          className="w-6 h-6 m-2"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
          }}
        />
        <img
          src="task.png"
          alt=""
          className="w-6 h-6 m-2"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
          }}
        />
        <img
          src="chat.png"
          alt=""
          className="w-6 h-6 m-2"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
          }}
        />
        <img
          src="dropbox.png"
          alt=""
          className="w-6 h-6 m-2"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
          }}
        />
        <img
          src="storm.png"
          alt=""
          className="w-6 h-6 m-2"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
          }}
        />
        <img
          src="bulb.png"
          alt=""
          className="w-6 h-6 m-2"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
          }}
        />
        <img
          src="data.png"
          alt=""
          className="w-6 h-6 m-2"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
          }}
        />
      </div>
      <div>
        <img src="man.png" alt="" className="w-14 h-14 rounded-full" />
      </div>
    </div>
  );
};

export default Sidebar;
