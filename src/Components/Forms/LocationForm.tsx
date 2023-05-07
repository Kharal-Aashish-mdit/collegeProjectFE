import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Textarea, Button, Switch } from "@mantine/core";
import { axiosInstance } from "./../../utils/axios.instance";
import FormWrapper from "../../wrapper/Form";
import { toast } from "react-toastify";

export type LocationFormData = {
  name: string;
};

function LocationForm() {
  const form = useForm<LocationFormData>({
    initialValues: {
      name: "",
    },
  });

  const handleSubmit = async (data: LocationFormData) => {
    try {
      const response = await axiosInstance.post("/locations", data);
      console.log(response.data);
      if (response) {
        form.reset();
        toast(response.data?.message ?? "Location Added Sucessfully");
      }
    } catch (error) {
      console.error(error);
      toast("Something went wrong");
    }
  };

  return (
    <FormWrapper name="Location">
      <form onSubmit={form.onSubmit(handleSubmit)} className="grid gap-4">
        <TextInput
          label="Location Name:"
          placeholder="Write your preferred Location"
          required
          {...form.getInputProps("name")}
        />

        <Button type="submit">Submit</Button>
      </form>
    </FormWrapper>
  );
}

export default LocationForm;
