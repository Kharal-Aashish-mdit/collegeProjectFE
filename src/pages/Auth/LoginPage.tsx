import React from "react";

import MainWrapper from "../../wrapper/Main";
import { Title } from "@mantine/core";
import LoginForm from "../../Components/Forms/Login";

const LoginPage = () => {
  return (
    <MainWrapper>
      <div className="p-4 bg-gray-100 rounded grid gap-4 max-w-2xl mx-auto mt-8 justify-items-center">
        <Title order={3}>Login Form</Title>
        <LoginForm />
      </div>
    </MainWrapper>
  );
};

export default LoginPage;
