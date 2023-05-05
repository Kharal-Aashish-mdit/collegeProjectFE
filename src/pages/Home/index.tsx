import React from 'react'
import LocationForm from './../../Components/Forms/LocationForm';
import SearchHotel from './../../Components/SearchHotels/SearchHotel';
import MainWrapper from './../../wrapper/Main';

const HomePage = () => {
  return (
    <MainWrapper>
    <LocationForm/>
    <SearchHotel/>
    </MainWrapper>
  )
}

export default HomePage