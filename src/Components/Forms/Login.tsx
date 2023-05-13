import React from "react";
import { toast } from "react-toastify";
import { useForm } from "@mantine/form";
import { TextInput, PasswordInput, Button, Text } from "@mantine/core";

import TextLabel from "../Label";
import { loginAPI, loginPOST } from "../../api/apis";
import { Link } from "react-router-dom";
import FormWrapper from "../../wrapper/Form";

const LoginForm = () => {
  const loginForm = useForm<loginPOST>({
    initialValues: {
      email: "",
      password: "",
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

  const submitHandler = async (data: loginPOST) => {
    try {
      const response = await loginAPI(data);
      console.log(response);
      const token = response.data?.token;
      const isSeller = response.data?.isSeller;

      if (response) {
        toast("Login Sucessfull");
        localStorage.setItem("token", token);
        window.location.href = "/profile";
      }
    } catch (err) {}
    toast("Login Failed");
  };
  return (
    <FormWrapper name="Login">
      <form
        onSubmit={loginForm.onSubmit(submitHandler)}
        className="grid gap-4 w-full max-w-sm mx-auto"
      >
        <TextInput
          label={<TextLabel value="Email" />}
          {...loginForm.getInputProps("email")}
        />
        <PasswordInput
          label={<TextLabel value="Password" />}
          {...loginForm.getInputProps("password")}
        />
        <Text className="font-semibold mt-2">
          Does not have a account ? <Link to="/register">register</Link>
        </Text>
        <Button
          type="submit"
          className="bg-cyan-700"
        >
          Login
        </Button>
      </form>
    </FormWrapper>
  );
};

export default LoginForm;
