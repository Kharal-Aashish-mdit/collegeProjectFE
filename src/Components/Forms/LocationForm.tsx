import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Textarea, Button, Switch } from "@mantine/core";
import { axiosInstance } from './../../utils/axios.instance';

export type LocationFormData = {
  name:string
}

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
      if(response) {
        form.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" pl-9 pt-5 h-1/2 w-1/2">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <label className="text-xl" htmlFor="HotelForm">
          Location Form
        </label>

        <TextInput
          label="Location Name:"
          placeholder="Write your preferred Location"
          required
          {...form.getInputProps("name")}
        />

        <div>
          <Button className="bg-blue-700 m-4 w-1/2" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LocationForm;
