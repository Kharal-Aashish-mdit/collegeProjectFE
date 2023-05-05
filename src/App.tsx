import React from "react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./config/RouterPath";

// import HotelForm from "./Components/Forms/HotelForm";
// import SellerForm from "./Components/Forms/SellerForm";
// import LocationForm from "./Components/Forms/LocationForm";
// import SearchHotel from "./Components/SearchHotels/SearchHotel";
// import RegisterForm from './Components/Register/Register';
// import MainNavBar from "./Components/NavBar/NavBar";

const App = () => {
  return <>{<RouterProvider router={Router} />}</>;
};

export default App;
