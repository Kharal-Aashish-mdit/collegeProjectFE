import React from "react";

import MainWrapper from "../../wrapper/Main";
import { Title } from "@mantine/core";
import LoginForm from "../../Components/Forms/Login";

const LoginPage = () => {
  return (
    <MainWrapper>
      <div className="p-4rounded grid gap-4 max-w-2xl mx-auto mt-8 justify-items-center">
        <LoginForm />
      </div>
    </MainWrapper>
  );
};

export default LoginPage;
