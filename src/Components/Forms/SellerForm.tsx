import React from "react";
import { TextInput, PasswordInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import FormWrapper from "../../wrapper/Form";

type sellerFormData = {
  email: string;
  password: string;
};

function SellerForm() {
  const form = useForm<sellerFormData>({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: sellerFormData) => {
    try {
      const response = await axios.post("/", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormWrapper>
      <div className=" pl-9 pt-5 h-1/2 w-1/2">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <label className="text-xl" htmlFor="HotelForm">
            Seller Form
          </label>

          <TextInput
            label="Email"
            placeholder="Enter your email"
            required
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            required
            {...form.getInputProps("password")}
          />
          <Button className="bg-blue-700 m-4 w-1/2" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </FormWrapper>
  );
}

export default SellerForm;
