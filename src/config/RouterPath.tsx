import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import ProfilePage from "./../pages/Profile/index";
import HotelPage from "./../pages/Seller/Hotel";
import SellerPage from "./../pages/Seller/index";
import AddRoomPage from "./../pages/Room/Room";
import HomeDashboard from "../pages/UserDashboard/HomeDashboard";
import HomeDashboardPage from "../pages/UserDashboard/HomeDashboard";
import RoomDetailPage from "../pages/RoomDetails";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";

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
    path: "/seller",
    element: <SellerPage />,
  },
  {
    path: "/sellerHotel",
    element: <HotelPage />,
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
]);
