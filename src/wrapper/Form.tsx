import React from "react";
import { ChildProp } from "./Main";
import { Title } from "@mantine/core";

const FormWrapper = ({ children, name }: ChildProp & { name?: string }) => {
  return (
    <div className="max-w-xl w-full mx-auto p-4 bg-white border border-solid border-gray-200 rounded grid gap-4">
      {name && <Title order={3}>{name} Form</Title>}
      {children}
    </div>
  );
};

export default FormWrapper;
