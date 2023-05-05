import React, { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Textarea, Button, Select, Title, Switch} from "@mantine/core";
import { axiosInstance } from "./../../utils/axios.instance";
import FormWrapper from "./../../wrapper/Form";

export type RoomFormData = {
  hotelId: string;
  price: number;
  image: string;
  noOfBed: number;
  roomNo: number;
  roomType: string;
  sceneryFacing: boolean;
  rental: boolean;
  ticketing: boolean;
  balcony: boolean;
  swimmingPool: boolean;
  gym : boolean;
};

function RoomForm() {
  const form = useForm<RoomFormData>({
    initialValues: {
      hotelId: "",
      price: 0,
      image: "",
      noOfBed: 0,
      roomNo: 0,
      roomType: "",
      sceneryFacing: false,
      rental: false,
      ticketing: false,
      balcony: false,
      swimmingPool: false,
      gym : false,
    },
  });

  type hotelIdData = {
    id: string,
    name: string,
  }
   type hotelOption = {
    label : string,
    value : string
   }

  const [hotels, setHotels] = useState<hotelOption[]>([])
  const getHotels = async () => {
    try {
      const hotelList = await axiosInstance.get("/hotels");
      console.log(hotelList.data);
      const optionData = hotelList?.data?.map((item:hotelIdData) => { 
        return {label:item.name, value:item.id}
      });
      setHotels(optionData)
      console.log(hotels);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.addEventListener('load', getHotels)
    return () => {
      window.removeEventListener('load', getHotels)
    }
  },[hotels])

  const handleSubmit = async (data: RoomFormData) => {
    try {
      const response = await axiosInstance.post("/rooms", data);
      if(response){
        form.reset()
        alert("Entered Data has been sent successfully")
      }

    } catch (error) {
      console.log(error)
      alert("Your Response Has not sent")
    }
  };



  return (
    <FormWrapper>

        <Title>Hotel Room Form</Title>
        <form
        className="grid gap-4 w-full"
        onSubmit={form.onSubmit(handleSubmit)}
        >
          <Select
        data={hotels}
        label="Pick Your Hotel:"
        placeholder="Pick a hotel"
        {...form.getInputProps("hotelId")}
        />

        <TextInput
          label="Room Number"
          placeholder="Enter the room number"
          required
          {...form.getInputProps("roomNo")}
        />

        <TextInput
          label="Number of Bed"
          placeholder="Enter the number of beds"
          required
          {...form.getInputProps("noOfBed")}
        />
        <TextInput
          label="Room Price"
          placeholder="Enter the room price"
          required
          {...form.getInputProps("price")}
        />

        <Select
          label="Room Type"
          placeholder="Pick one"
          required
          data={[
            { value: 'Economic', label: 'Economic' },
            { value: 'Deluxe', label: 'Deluxe' },
            { value: 'Standard', label: 'Standard' },
          ]}
          {...form.getInputProps("roomType")}
        />

        <TextInput
          label="Image URL"
          placeholder="Paste the image url"
          required
          {...form.getInputProps("image")}
        />

        <div>
          <label className="text-x">Features:</label>
        </div>
        <div className="grid gap-3 grid-cols-2">

          <Switch
            className="gap-x-4"
            label="Balcony"
            {...form.getInputProps("Balcony")}
          />

          <Switch
            label="Scenery Facing"
            {...form.getInputProps("sceneryFacing")}
          />

          <Switch 
          label="Ticketing" 
          {...form.getInputProps("Ticketing")} 
          />

          <Switch
            label="Swimming Pool"
            {...form.getInputProps("SwimmingPool")}
          />

          <Switch 
          label="Rental"
          {...form.getInputProps("Rental")} 
          />

          <Switch 
          label="Gym"
          {...form.getInputProps("gym")} 
          />
        </div>

        

        <Button className="mt-4" type="submit">
          Submit
        </Button>

      </form>
    </FormWrapper>
  );
}

export default RoomForm;
