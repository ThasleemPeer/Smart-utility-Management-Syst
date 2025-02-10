import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import FindWorkers from "./pages/FindWorkers"; // New Page
import MyBookings from "./pages/MyBookings"; // New Page
import WorkerDashboard from "./pages/WorkerDashboard";
const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/signup", element: <Signup /> },
  { path: "/find-workers", element: <FindWorkers /> }, // Add new route
  { path: "/my-bookings", element: <MyBookings /> }, // Add new route
  { path: "/worker-dashboard", element: <WorkerDashboard/> }, 
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
