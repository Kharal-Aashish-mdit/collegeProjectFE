import React from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { TextInput, PasswordInput, Button, Select, Text } from "@mantine/core";

import TextLabel from "../Label";
import { ROLE_ENUM, registerAPI, registerPOST } from "../../api/apis";

const RegisterForm = () => {
  const navigation = useNavigate();
  const registerForm = useForm<registerPOST>({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      role: ROLE_ENUM.user,
    },
    validate: {
      email: (value) => {
        if (!value) return "Email cannot be left empty";
        if (!value.includes("@") || !value.includes("."))
          return "Input valid Email";
      },
      password: (value) => (value ? null : "Password cannot be left empty"),
    },
  });

  const submitHandler = async (data: registerPOST) => {
    try {
      const response = await registerAPI(data);
      console.log(response);
      if (response) {
        toast(response?.data?.message ?? "Register Sucessfull");
        navigation("/login");
      }
    } catch (err) {}
    toast("Register Failed");
  };
  return (
    <form
      onSubmit={registerForm.onSubmit(submitHandler)}
      className="grid gap-4 w-full max-w-sm"
    >
      <div className="grid gap-4 grid-cols-2">
        <TextInput
          label={<TextLabel value="Firstname" />}
          {...registerForm.getInputProps("firstname")}
        />
        <TextInput
          label={<TextLabel value="Lastname" />}
          {...registerForm.getInputProps("lastname")}
        />
      </div>
      <TextInput
        label={<TextLabel value="Email" />}
        {...registerForm.getInputProps("email")}
      />
      <PasswordInput
        label={<TextLabel value="Password" />}
        {...registerForm.getInputProps("password")}
      />
      <Select
        label={<TextLabel value="Account Type" />}
        placeholder="User"
        data={[
          { value: "seller", label: "Seller" },
          { value: "user", label: "User" },
        ]}
      />

      <Button type="submit" className="mt-2">
        Register
      </Button>
      <Text className="font-semibold mt-2">
        Already have a account ? <Link to="/login">Login</Link>
      </Text>
    </form>
  );
};

export default RegisterForm;
