import React from "react";
import { Button } from "../ui/button";
const Signup = () => {
  return (
    <div>
      <div className="bg-gray-900 flex justify-center items-center h-screen">
        <form>
          <div className="flex flex-col relative w-xl  bg-gray-200 text-white items-center py-10 h-2/3 rounded-4xl">
            <h1 className="text-orange-600 font-bold text-3xl gap-3">
              Create Account
            </h1>
            <br></br>
            <p className="text-black font-medium text">Create An account </p>
            <p className="text-black font-medium">
              {" "}
              To check your task details{" "}
            </p>
            <input
              className="bg-orange-200 outline-orange-600 rounded placeholder: text-gray-700 px-3 placeholder w-xs h-10 mt-5 "
              placeholder="Enter your email"
              type="email"
            />

            <input
              className="bg-orange-200 rounded outline-orange-600  placeholder: text-gray-700 px-3 mt-5 w-xs h-10"
              placeholder="Enter your Password"
              type="password"
            />
            <input
              className="bg-orange-200 rounded outline-orange-600  placeholder: text-gray-700 px-3 mt-5 w-xs h-10"
              placeholder="Enter Confirm Password"
              type="password"
            />

            <Button className="mt-5" variant="success">
              Sign Up
            </Button>
            <a href="#" className=" mt-5 text-black font-medium">
              Already have an account? Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
