import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-row ">
      <Sidebar />
      <div className="bg-[#111111] flex-1 p-2 flex flex-row">
        <div className="mt-4  flex-1">
          <div className="flex flex-row  items-center justify-between">
            <div>
              <h4 className="font-bold text-4xl text-white">Stats</h4>
              <p className="text-sm text-gray-400 font-medium">
                MONTHLY UPDATES
              </p>
            </div>
            <div className="bg-black py-2 px-2 w-40 flex flex-row items-center justify-between rounded-full">
              <p className="text-white text-xs">iOS App PROJECT</p>
              <img
                src="chevron.png"
                alt=""
                className="w-4"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
                }}
              />
            </div>
          </div>
          <div className="bg-black w-full h-64 mt-4 flex flex-col justify-between rounded-lg p-2">
            <div className="flex flex-row justify-between">
              <div>
                <h4 className="text-white font-bold">Daily Sales Activity</h4>
                <h5 className="text-gray-500 text-xs">Today vs Yesterday</h5>
              </div>
              <div className="bg-gray-400 bg-opacity-20 rounded-2xl px-2 py-1 w-52">
                <div>
                  <h4 className="text-white font-bold">Weekly Invoices</h4>
                  <p className="text-xs text-gray-500">From 12 Oct - 24 Nov</p>
                </div>
              </div>
            </div>
            <div className=" mt-4 justify-between flex flex-row w-full p-2">
              <div className="flex flex-col justify-between mb-4">
                <h4 className="text-white">400</h4>
                <h4 className="text-white">300</h4>
                <h4 className="text-white">250</h4>
                <h4 className="text-white">200</h4>
                <h4 className="text-white">100</h4>
              </div>
              <div>
                <div className="flex flex-row items-center relative">
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-300 w-1 h-32"></div>{" "}
                    {/* Increased height */}
                    <h4 className="text-gray-200">Jan</h4>
                  </div>
                  <div className="flex flex-col items-center mx-4">
                    <div className="bg-gray-300 w-1 h-32"></div>{" "}
                    {/* Increased height */}
                    <h4 className="text-gray-200">Feb</h4>
                  </div>
                  <div className="flex flex-col items-center mx-4">
                    <div className="bg-gray-300 w-1 h-32"></div>{" "}
                    {/* Increased height */}
                    <h4 className="text-gray-200">Mar</h4>
                  </div>
                  <div className="flex flex-col items-center mx-4">
                    <div className="bg-gray-300 w-1 h-32"></div>{" "}
                    {/* Increased height */}
                    <h4 className="text-gray-200">Apr</h4>
                  </div>
                  <div className="flex flex-col items-center mx-4">
                    <div className="bg-gray-300 w-1 h-32"></div>{" "}
                    {/* Increased height */}
                    <h4 className="text-gray-200">May</h4>
                  </div>
                  <div className="flex flex-col items-center mx-4">
                    <div className="bg-gray-300 w-1 h-32"></div>{" "}
                    {/* Increased height */}
                    <h4 className="text-gray-200">Jun</h4>
                  </div>
                </div>
                <div className="absolute bg-red-500 ">
                  <div className="w-6 absolute bottom-12 left-3 h-6 bg-violet-500 rounded-full "></div>
                  <div className="w-3 absolute bottom-16 left-11 h-3 bg-pink-300 rounded-full "></div>
                  <div className="w-10 absolute bottom-20 flex flex-col justify-center items-center left-20 h-10 bg-pink-400 rounded-full ">
                    <p className="text-xs font-bold">$200</p>
                  </div>
                  <div className="w-10 absolute bottom-8 left-28 h-10 bg-yellow-300 rounded-full "></div>
                  <div className="w-24 absolute bottom-20 left-36 h-24 bg-yellow-300 rounded-full flex-col flex items-center justify-center">
                    <h4 className="text-center font-bold">$350.00</h4>
                    <p className="text-xs font-bold">Apr 2023</p>
                  </div>
                  <div className="w-3 absolute bottom-12 left-56 h-3 bg-violet-400 rounded-full "></div>
                  <div className="w-10 absolute bottom-28 left-64 h-10 bg-yellow-300 rounded-full "></div>
                  <div className="w-4 absolute bottom-10 left-72  h-4 bg-yellow-300 rounded-full "></div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="flex flex-row items-end">
                  <div className="mx-1 flex flex-col items-center">
                    <div className="w-3 h-8 bg-yellow-300 rounded-lg"></div>
                    <p className="text-xs text-gray-400">Jan</p>
                  </div>
                  <div className="mx-1 flex flex-col items-center">
                    <div className="w-3 h-14 bg-gray-400 rounded-lg"></div>
                    <p className="text-xs text-gray-400">Feb</p>
                  </div>
                  <div className="mx-1 flex flex-col items-center">
                    <div className="w-3 h-12 bg-yellow-300 rounded-lg"></div>
                    <p className="text-xs text-gray-400">Mar</p>
                  </div>
                  <div className="mx-1 flex flex-col items-center">
                    <div className="w-3 h-12 bg-gray-400 rounded-lg"></div>
                    <p className="text-xs text-gray-400">Apr</p>
                  </div>
                  <div className="mx-1 flex flex-col items-center">
                    <div className="w-3 h-12 bg-yellow-300 rounded-lg"></div>
                    <p className="text-xs text-gray-400">May</p>
                  </div>
                  <div className="mx-1 flex flex-col items-center">
                    <div className="w-3 h-12 bg-gray-400 rounded-lg"></div>
                    <p className="text-xs text-gray-400">Jun</p>
                  </div>
                  <div className="mx-1 flex flex-col items-center">
                    <div className="w-3 h-12 bg-yellow-300 rounded-lg"></div>
                    <p className="text-xs text-gray-400">Jul</p>
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="flex flex-row m-1">
                    <div className="p-1 bg-gray-500 w-10 h-10 rounded-lg"></div>
                    <div className="ml-2">
                      <h4 className="text-xs text-gray-600">Minimum</h4>
                      <p className="text-sm text-gray-300">24,170</p>
                    </div>
                  </div>
                  <div className="flex flex-row m-1">
                    <div className="p-1 bg-gray-500 w-10 h-10 rounded-lg"></div>
                    <div className="ml-2">
                      <h4 className="text-xs text-gray-600">Minimum</h4>
                      <p className="text-sm text-gray-300">24,170</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black bg-opacity-25 flex flex-col justify-between rounded-lg p-2 mt-4 h-72">
            <div className=" h-44 p-2"></div>
            <div className="flex flex-row justify-between mt-6">
              <div>
                <div className="bg-gray-800 m-1 bg-opacity-70 flex flex-row items-center w-56  rounded-lg p-2 ">
                  <img src="wave.png" alt="" className="w-6 h-6" style={{
                  filter:
                    "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
                }}/>
                  <p className="text-xs flex-1 text-gray-400 ml-2">Likes</p>
                  <p className="text-xs text-white">16</p>
                </div>
                <div className="bg-gray-800 m-1 bg-opacity-70 flex flex-row items-center w-56  rounded-lg p-2 ">
                  <img src="userTwo.png" alt="" className="w-6 h-6" style={{
                  filter:
                    "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
                }}/>
                  <p className="text-xs flex-1 ml-2 text-gray-400">Likes</p>
                  <p className="text-xs text-white">16</p>
                </div>
              </div>
              <div>
                <div className="bg-gray-800 m-1 bg-opacity-70 flex flex-row items-center w-56  rounded-lg p-2 ">
                  <img src="attach.png" alt="" className="w-6 h-6" style={{
                  filter:
                    "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
                }}/>
                  <p className="text-xs flex-1 ml-2 text-gray-400 font-bold">Attachment</p>
                  <p className="text-xs text-white">32</p>
                </div>
                <div className="bg-gray-800 m-1 bg-opacity-70 flex flex-row items-center w-56  rounded-lg p-2 ">
                  <img src="userTwo.png" alt="" className="w-6 h-6" style={{
                  filter:
                    "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
                }}/>
                  <p className="text-xs flex-1 ml-2 text-gray-400">Likes</p>
                  <p className="text-xs text-white">16</p>
                </div>
              </div>
              <div className="bg-gray-800 bg-opacity-70 w-56 rounded-lg p-2">
                <div className="flex flex-row justify-between items-center">
                  <h4 className="text-xs font-bold text-white">
                    Project Progress
                  </h4>
                  <h4 className="bg-yellow-200 text-center text-gray-700 font-bold text-xs py-0.5 w-16 rounded">
                    On Track
                  </h4>
                </div>
                <div class="relative">
                  <svg
                    class="absolute top-0 left-0 w-full h-20"
                    viewBox="0 0 1440 100"
                  >
                    <path
                      fill="none"
                      stroke="#fef08a"
                      stroke-width="6"
                      d="M0,100 Q 120,0 240,100 T 480,100 T 720,0 T 960,100 T 1200,80 T 1440,50"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black bg-opacity-25 w-2/5 ml-4 rounded-lg p-2">
          <div className="flex flex-row items-center">
            <div className="bg-gray-400 bg-opacity-50 flex justify-between flex-row p-1 w-20 h-8 rounded">
              <div className="bg-yellow-400 bg-opacity-70 flex flex-col items-center justify-center w-8 rounded p-1">
                <img src="horizontal.png" alt="" />
              </div>
              <div className=" flex flex-col items-center justify-center w-8 rounded p-1">
                <img src="vertical.png" alt="" />
              </div>
            </div>
            <div className="flex flex-row items-center flex-1 ml-4">
              <div className="flex flex-row items-center">
                <img src="chevronleft.png" alt="" className="w-6 h-6" />
                <img src="chevronright.png" alt="" className="w-6 h-6" />
              </div>
              <h4 className="text-white text-md">Today 24 October,</h4>
            </div>
            <div className="flex flex-row items-center">
              <img
                src="bell.png"
                alt=""
                className="w-4 h-4"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
                }}
              />
              <img
                src="vert.png"
                alt=""
                className="w-4 h-4"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
                }}
              />
            </div>
            
          </div>
          {/*sidebar */}
          <div className="mt-2  p-2">
            <div className="flex items-center justify-center">
              <p className="mr-2 text-gray-500 text-xs">8:00am</p>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-96 p-2 flex flex-row justify-between rounded-full items-center bg-gray-500 bg-opacity-25">
                <div>
                  <img
                    src="phone.png"
                    alt=""
                    className="w-10 h-10 rounded-full bg-violet-600 p-1"
                  />
                </div>
                <div className=" w-48">
                  <h4 className="text-sm text-white">
                    Dental Cleaning and Care
                  </h4>
                  <div className="flex flex-row justify-between">
                    <p className="text-sm text-gray-400">8:00 - 9:00</p>
                    <img src="dot.png" alt="" className="w-4" />
                    <p className="text-sm text-gray-400">Edward Johanson</p>
                  </div>
                </div>
                <div>
                  <img src="vert.png" alt="" className="w-4 h-4" />
                </div>
              </div>

              <hr className=" border-t border-gray-300 mt-2 w-96" />
              <div className="w-96 p-2 flex flex-row mt-1 justify-between rounded-full items-center bg-gray-500 bg-opacity-25">
                <div>
                  <img
                    src="phone.png"
                    alt=""
                    className="w-10 h-10 rounded-full bg-violet-600 p-1"
                  />
                </div>
                <div className=" w-48">
                  <h4 className="text-sm font-medium text-white">
                    Status update to John Doe
                  </h4>
                  <div className="flex flex-row justify-between">
                    <p className="text-sm text-gray-400">8:00 - 9:00</p>
                    <img src="dot.png" alt="" className="w-4" />
                    <p className="text-sm text-gray-400">Edward Johanson</p>
                  </div>
                </div>
                <div>
                  <img src="vert.png" alt="" className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-2">
              <p className="mr-2 text-gray-500 text-xs">9:00am</p>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex items-center justify-center mt-2">
              <p className="mr-2 text-gray-500 text-xs ">9:30am</p>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex flex-col mt-2 items-center justify-center">
              <div className="w-96 p-2 flex flex-row justify-between rounded-full items-center bg-gray-500 bg-opacity-25">
                <div className="w-10 h-10 rounded-full flex flex-col justify-center items-center bg-[#7dd3fc]">
                  <img src="calendar.png" alt="" className="w-4 h-4   " />
                </div>
                <div className=" w-48">
                  <h4 className="text-sm font-medium text-white">
                    Calendar Updates
                  </h4>
                  <div className="flex flex-row justify-between">
                    <p className="text-sm text-gray-400">8:00 - 9:00</p>
                    <img src="dot.png" alt="" className="w-4" />
                    <p className="text-sm text-gray-400">Edward Johanson</p>
                  </div>
                </div>
                <div>
                  <img src="vert.png" alt="" className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <p className="mr-2 text-gray-500 text-xs">10:00am</p>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex items-center justify-center mt-10">
              <p className="mr-2 text-gray-500 text-xs">8:00am</p>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex flex-col mt-2 items-center justify-center">
              <div className="w-96 p-2 flex flex-row justify-between rounded-full items-center bg-gray-500 bg-opacity-25">
                <div className="w-10 h-10 rounded-full flex flex-col justify-center items-center bg-[#38bdf8]">
                  <img
                    src="envelope.png"
                    alt=""
                    className="w-4 h-4"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
                    }}
                  />
                </div>
                <div className=" w-48">
                  <h4 className="text-sm font-medium text-white">
                    Send Detailed Status Update
                  </h4>
                  <div className="flex flex-row justify-between">
                    <p className="text-sm text-gray-400">8:00 - 9:00</p>
                    <img src="dot.png" alt="" className="w-4" />
                    <p className="text-sm text-gray-400">Edward Johanson</p>
                  </div>
                </div>
                <div>
                  <img src="vert.png" alt="" className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <p className="mr-2 text-gray-500 text-xs">11:00am</p>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex flex-col mt-2 items-center justify-center">
              <div className="w-96 p-2 flex flex-row justify-between rounded-full items-center bg-gray-500 bg-opacity-25">
                <div className="w-10 h-10 rounded-full flex flex-col justify-center items-center bg-violet-600">
                  <img
                    src="clock.png"
                    alt=""
                    className="w-6 h-6  "
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(90%) sepia(40%) hue-rotate(10deg) brightness(95%) contrast(90%)",
                    }}
                  />
                </div>
                <div className=" w-48">
                  <h4 className="text-sm text-white">
                    Dental Cleaning and Care
                  </h4>
                  <div className="flex flex-row justify-between">
                    <p className="text-sm text-gray-400">8:00 - 9:00</p>
                    <img src="dot.png" alt="" className="w-4" />
                    <p className="text-sm text-gray-400">Edward Johanson</p>
                  </div>
                </div>
                <div>
                  <img src="vert.png" alt="" className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-1">
              <p className="mr-2 text-gray-500 text-xs">12:00am</p>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex  mt-1">
              <p className="mr-2 text-gray-500 text-xs">13:00pm</p>
            </div>
            <div className=" flex flex-col items-end">
              <div className="bg-yellow-400 p-2 w-10 h-10 rounded-full mt-2">
                <img src="plus.png" alt="" />
              </div>
            </div>
            {/*here */}
          </div>
          {/*sidebar */}
        </div>
      </div>
    </div>
  );
}

export default App;
