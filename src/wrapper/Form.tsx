import React from "react";
import { ChildProp } from "./Main";
import { Title } from "@mantine/core";

const FormWrapper = ({ children, name }: ChildProp & { name?: string }) => {
  return (
    <div className="max-w-xl w-full mx-auto p-4  rounded grid gap-4">
      {name && (
        <Title
          className="text-center text-cyan-700"
          order={3}
        >
          {name}
        </Title>
      )}
      {children}
    </div>
  );
};

export default FormWrapper;
