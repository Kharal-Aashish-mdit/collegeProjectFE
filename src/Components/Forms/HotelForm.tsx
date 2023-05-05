import React, { useEffect,useState } from "react";
import axios from "axios";
import { useForm } from "@mantine/form";
import { TextInput, Textarea, Button, Select, Title} from "@mantine/core";
import { axiosInstance } from "./../../utils/axios.instance";
import FormWrapper from "./../../wrapper/Form";

export type HotelFormData = {
  name: string;
  address: string;
  locationId: string;
};

function HotelForm() {
  
  const form = useForm<HotelFormData>({
    initialValues: {
      name: "",
      address: "",
      locationId: "",
    },
  });
type locationData = {
  name : string,
  id: string,
}
type locationOption = {
  label:string,
  value:string

}
  const [locations, setLocations] = useState<locationOption[]>([])
  const getLocations = async () => {
    try {
      const locationList = await axiosInstance.get("/locations");
      console.log(locationList.data);
      const optionData = locationList?.data?.map((item:locationData)=> {
        return {label:item.name, value:item.id}
      });
     setLocations(optionData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.addEventListener('load', getLocations)
    return () => {
      window.removeEventListener('load', getLocations)
    }
  },[locations]);


  const handleSubmit = async (data: HotelFormData) => {
    try {
      // const response = await axios.post('/api/seller/', form.values);
      const response = await axiosInstance.post("/hotels", data);
      if(response) {
        form.reset()
      }
    
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <FormWrapper>
      <Title>Hotel Form</Title>
      <form
        className="grid gap-4 w-full"
        onSubmit={form.onSubmit(handleSubmit)}
      >


        <TextInput
          label="Hotel Name"
          placeholder="Enter Hotel Name"
          required
          {...form.getInputProps("name")}
        />

        <TextInput
          label="Address"
          placeholder="Enter hotel address"
          required
          {...form.getInputProps("address")}
        />
      <Select
      data={locations}
      label="Your Location:"
      placeholder="Pick a location"
      {...form.getInputProps("locationId")}

    />

         <Button className="mt-4" type="submit">
         Submit
        </Button> 
      </form>
    </FormWrapper>
  );
}

export default HotelForm;
