import React from "react";

import MainWrapper from "../../wrapper/Main";
import { Title } from "@mantine/core";
import RegisterForm from "../../Components/Forms/Register";

const RegisterPage = () => {
  return (
    <MainWrapper>
      <div className="p-4 rounded grid gap-4 max-w-2xl mx-auto mt-8 justify-items-center">
        <RegisterForm />
      </div>
    </MainWrapper>
  );
};

export default RegisterPage;
