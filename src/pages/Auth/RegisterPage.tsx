import React from "react";

import MainWrapper from "../../wrapper/Main";
import { Title } from "@mantine/core";
import RegisterForm from "../../Components/Forms/Register";

const RegisterPage = () => {
  return (
    <MainWrapper>
      <div className="p-4 bg-gray-100 rounded grid gap-4 max-w-2xl mx-auto mt-8 justify-items-center">
        <Title order={3}>Register</Title>
        <RegisterForm />
      </div>
    </MainWrapper>
  );
};

export default RegisterPage;
