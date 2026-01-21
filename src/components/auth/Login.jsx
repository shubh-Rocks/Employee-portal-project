import { useState } from "react";
import { Button } from "../ui/button";
import { UserAuth } from "@/context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const { session, LogInUser } = UserAuth();
  console.log(session);

  const handleLogIn = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const result = await LogInUser(email, Password);

    if (!result.success) {
      setError(result.error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate("/EmployeeDasboard");
    alert("Login successful! Check Supabase Auth Users.");
  };

  return (
    <div className="bg-gray-900 flex justify-center items-center h-screen">
      <form onSubmit={handleLogIn}>
        <div className="flex flex-col relative w-xl  bg-gray-200 text-white items-center py-10 h-2/3 rounded-4xl">
          <h1 className="text-orange-600 font-bold text-3xl gap-3">
            Login here
          </h1>
          <br></br>
          <p className="text-black font-medium text">Welcome back you've</p>
          <p className="text-black font-medium">been missed!</p>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-orange-200 outline-orange-600 rounded placeholder: text-gray-700 px-3 placeholder w-xs h-10 mt-5 "
            placeholder="Enter your email"
            type="email"
          />
          <br></br>
          <input
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-orange-200 rounded outline-orange-600  placeholder: text-gray-700 px-3 mt-5 w-xs h-10"
            placeholder="Enter your Password"
            type="password"
          />
          <a href="#" className=" ml-40 mt-3 text-orange-600 font-medium">
            Forgot your Password?
          </a>

          <Button className="mt-5" variant="success">
            LOGIN
          </Button>
          <a href="#" className=" mt-5 text-black font-medium">
            Create New Account
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
