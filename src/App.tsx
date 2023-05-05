import React from 'react'
import HotelForm from './Components/Forms/HotelForm'
import SellerForm from './Components/Forms/SellerForm';
import LocationForm from './Components/Forms/LocationForm';
import SearchHotel from './Components/SearchHotels/SearchHotel';
import { RouterProvider } from 'react-router-dom';
// import RegisterForm from './Components/Register/Register';
import { Router } from './config/RouterPath';
import MainNavBar from './Components/Admin/AdminWrapper';


const App = () => {
  return (
    <>
    {<RouterProvider router={Router} />}
    </>
  )
}

export default App