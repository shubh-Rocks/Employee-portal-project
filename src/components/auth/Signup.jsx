import { useState } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "@/context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== conPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const result = await signUpNewUser(email, password);

    if (!result.success) {
      setError(result.error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate("/Login");
  };

  return (
    <div className="bg-gray-900 flex justify-center items-center h-screen">
      <form onSubmit={handleSignUp}>
        <div className="flex flex-col bg-gray-200 items-center py-10 px-8 rounded-2xl w-96">
          <h1 className="text-orange-600 font-bold text-3xl">Create Account</h1>

          <p className="text-black font-medium mt-2">
            Create an account to check your task details
          </p>

          {error && <p className="text-red-600 mt-3 font-medium">{error}</p>}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-orange-200 outline-orange-600 rounded px-3 mt-5 w-full h-10"
            placeholder="Enter your email"
            type="email"
            required
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-orange-200 outline-orange-600 rounded px-3 mt-5 w-full h-10"
            placeholder="Enter your password"
            type="password"
            required
          />

          <input
            value={conPassword}
            onChange={(e) => setConPassword(e.target.value)}
            className="bg-orange-200 outline-orange-600 rounded px-3 mt-5 w-full h-10"
            placeholder="Confirm password"
            type="password"
            required
          />

          <Button className="mt-5 w-full" variant="success" disabled={loading}>
            {loading ? "Creating Account..." : "Sign Up"}
          </Button>

          <p className="text-black pt-3 font-medium">
            Already have an account?{" "}
            <Link className="text-blue-900" to="/Login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
