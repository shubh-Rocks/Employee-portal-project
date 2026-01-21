import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import AdminDasboard from "./components/Dasboard/AdminDasboard";
import EmployeeDasboard from "./components/Dasboard/EmployeeDasboard";
export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Login", element: <Login /> },
  { path: "/Signup", element: <Signup /> },
  { path: "/AdminDashboard", element: <AdminDasboard /> },
  { path: "/EmployeeDasboard", element: <EmployeeDasboard /> },
]);
