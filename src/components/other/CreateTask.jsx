import React from "react";

const CreateTask = () => {
  return (
    <div>
      <div className="h-screen mt-5 bg-[#d3d3d3]">
        <form className="flex gap-11 justify-center items-center h-5/6">
        
          {/* left side */}
          <div className="h-3/4 bg-gray-50 w-3/6 p-10 ">
            <div>
              <h3 className="text-2xl text-gray-600 font-semibold">
                Task Title *
              </h3>
              <input
                className="border-2 rounded-2xl bg-gray-200 outline-none pl-3 h-15 w-3/4"
                type="text"
                placeholder="Make a UI design"
              />
            </div>

            <div className="flex justify-between mt-3">
              <div>
                <h3 className="text-2xl text-gray-600 font-semibold">
                  Asign to *
                </h3>
                <input
                  className="border-2 rounded-2xl bg-gray-200 outline-none pl-3 h-15 w-88"
                  type="text"
                  placeholder="employee name"
                />
              </div>
              <div>
                <h3 className="text-2xl text-gray-600 font-semibold">
                  Priority *
                </h3>
                <select className="border-2 rounded-2xl pl-3 bg-gray-200 outline-none h-15 w-88">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between mt-3">
              <div>
                <h3 className="text-2xl text-gray-600  font-semibold">
                  Created By *
                </h3>
                <input
                  className="border-2 rounded-2xl bg-gray-200 outline-none pl-3 h-15 w-88"
                  type="text"
                  placeholder="employee name"
                />
              </div>

              <div>
                <h3 className="text-2xl text-gray-600 font-semibold">
                  Department *
                </h3>
                <input
                  className="outline-none border-2 rounded-2xl bg-gray-200 pl-3 h-15 w-88"
                  type="text"
                  placeholder="employee name"
                />
              </div>
            </div>

            <div className="mt-15 ml-10">
              <h3 className="text-2xl text-gray-600 font-semibold">
                Description *
              </h3>
              <textarea
                className=" outline-none border-4 border-[#d3d3d3] pl-3 h-68 w-4xl bg-gray-200"
                placeholder="Task details..."
              />
            </div>
          </div>


          {/* right side */}
          <div className="h-3/4 bg-gray-50 w-4/12 p-10 ">
            <div className="mt-15">
              <h3 className="text-2xl text-gray-600 font-semibold">
                Task Status *
              </h3>
              <select className=" h-15 w-88">
                <option>Not started</option>
                <option>Started</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="mt-15">
              <h3> Start Date</h3>
              <input type="date" />
            </div>

            <div className="mt-15">
              <h3> Due Date</h3>
              <input type="date" />
            </div>

            <div className="mt-15">
              <h3>Category</h3>
              <input type="text" placeholder="Design,dev,etc" />
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateTask;
