import React from "react";
import MainWrapper from "../../wrapper/Main";
import HomeDashboard from "../../Components/UsersHomeDashboard/HomeDashboard";
import UserDashboard from './../../Components/UsersHomeDashboard/HomeDashboard';

function HomeDashboardPage() {
  return (
    <MainWrapper>
      <UserDashboard/>
    </MainWrapper>
  );
}

export default HomeDashboardPage;
