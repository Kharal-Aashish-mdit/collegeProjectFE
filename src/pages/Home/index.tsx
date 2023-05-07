import React from "react";
import LocationForm from "./../../Components/Forms/LocationForm";
import SearchHotel from "./../../Components/SearchHotels/SearchHotel";
import MainWrapper from "./../../wrapper/Main";
import UserDashboard from "../../Components/UsersHomeDashboard/HomeDashboard";

const HomePage = () => {
  return (
    <MainWrapper>
      <UserDashboard />
    </MainWrapper>
  );
};

export default HomePage;
