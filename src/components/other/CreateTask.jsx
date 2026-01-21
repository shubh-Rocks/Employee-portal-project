import { Button } from "../ui/button";


const CreateTask = () => {
  return (
    <div>
      <div className="h-fit p-10 rounded-4xl  m-10 bg-gray-700">
        <form className="flex gap-11 justify-center items-center h-5/6">
          {/* left side */}
          <div className="h-4/5 bg-gray-50 w-[900px] rounded-4xl px-10 py-5 ">
            <div className="  mb-3  w-5xl ">
              <h3 className="text-2xl ml-3 mb-3 text-gray-600 font-semibold">
                Task Title *
              </h3>
              <input
                className="border-2 border-[#d3d3d3] rounded-2xl bg-gray-200 outline-none placeholder:text-[18px] pl-3 h-15 w-[77%]"
                type="text"
                placeholder="Make a UI design"
              />
            </div>

            <div className="flex gap-20 mt-3">
              <div>
                <h3 className="text-2xl ml-3 mb-3 text-gray-600 font-semibold">
                  Asign to *
                </h3>
                <input
                  className="border-2 border-[#d3d3d3] rounded-2xl placeholder:text-[18px]  bg-gray-200 outline-none pl-3 h-15 w-88"
                  type="text"
                  placeholder="employee name"
                />
              </div>
              <div>
                <h3 className="text-2xl ml-3 mb-3 text-gray-600 font-semibold">
                  Priority *
                </h3>
                <select className="border-2 border-[#d3d3d3] rounded-2xl pl-3 bg-gray-200 outline-none h-15 w-88">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <div className="flex gap-20 mt-3">
              <div>
                <h3 className="text-2xl ml-3 mb-3 text-gray-600 font-semibold">
                  Created By *
                </h3>
                <input
                  className="border-2 border-[#d3d3d3] placeholder:text-[18px] rounded-2xl bg-gray-200 outline-none pl-3 h-15 w-88"
                  type="text"
                  placeholder="employee name"
                />
              </div>

              <div>
                <h3 className="text-2xl ml-3 mb-3 text-gray-600 font-semibold">
                  Department *
                </h3>
                <input
                  className="outline-none border-[#d3d3d3] border-2 placeholder:text-[18px] rounded-2xl bg-gray-200 pl-3 h-15 w-88"
                  type="text"
                  placeholder="employee name"
                />
              </div>
            </div>

            <div className="mt-15 ml-10">
              <h3 className="text-2xl ml-3 mb-3 text-gray-600 font-semibold">
                Description *
              </h3>
              <textarea
                className=" resize-none outline-none border-4 placeholder:text-[18px] border-[#d3d3d3] pl-3 h-52 w-[600px] bg-gray-200"
                placeholder="Task details..."
              />
            </div>

            <Button className="mt-5 mr-10 w-full text-2xl h-10" variant="succ">
              Create Task
            </Button>
          </div>

          {/* right side */}

          <div className="h-2/3 bg-gray-50 w-3/12 px-15 rounded-4xl ">
            <div className="">
              <h3 className="text-2xl ml-3 mb-3 mt-10 text-gray-600 font-semibold">
                Task Status *
              </h3>
              <select className=" bg-gray-200 border-[#d3d3d3] border-2 outline-none placeholder:text-[18px]  pl-3 h-15 rounded-2xl w-88">
                <option>Not started</option>
                <option>Started</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="mt-15">
              <h3 className="text-2xl ml-3 mb-3 text-gray-600 font-semibold">
                Start Date
              </h3>
              <input
                className="bg-gray-200 border-[#d3d3d3] border-2 outline-none placeholder:text-[18px] p-3 h-15 rounded-2xl w-88 "
                type="date"
              />
            </div>

            <div className="mt-10">
              <h3 className="text-2xl text-gray-600 ml-3 mb-3 font-semibold">
                Due Date
              </h3>
              <input
                className="bg-gray-200 border-[#d3d3d3] border-2 outline-none placeholder:text-[18px]  p-3 h-15 rounded-2xl w-88 "
                type="date"
              />
            </div>

            <div className="mt-10 mb-5">
              <h3 className="text-2xl text-gray-600 font-semibold mb-3 ml-3">
                Category
              </h3>
              <input
                className="bg-gray-200 border-[#d3d3d3] border-2 outline-none placeholder:text-[18px] p-3 h-15 rounded-2xl w-88 "
                type="text"
                placeholder="Design,dev,etc"
              />
            </div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default CreateTask;
