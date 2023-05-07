import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import ProfilePage from "./../pages/Profile/index";
import SellerDashboard from "../pages/SellerDashboard/index";
import AddRoomPage from "./../pages/Room/Room";
import HomeDashboard from "../pages/UserDashboard";
import HomeDashboardPage from "../pages/UserDashboard";
import RoomDetailPage from "../pages/RoomDetails";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import AboutPage from "../pages/About";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/sellerDashboard",
    element: <SellerDashboard />,
  },

  {
    path: "/addHotelRoom",
    element: <AddRoomPage />,
  },
  {
    path: "/userDashboard",
    element: <HomeDashboardPage />,
  },
  {
    path: "/roomDetail/:id",
    element: <RoomDetailPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);
