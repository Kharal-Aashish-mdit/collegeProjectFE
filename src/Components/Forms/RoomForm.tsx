import React, { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Textarea,
  Button,
  Select,
  Title,
  Switch,
} from "@mantine/core";
import { axiosInstance } from "./../../utils/axios.instance";
import FormWrapper from "./../../wrapper/Form";
import { toast } from "react-toastify";

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
  gym: boolean;
  phone: string;
};

function RoomForm() {
  const form = useForm<RoomFormData>({
    initialValues: {
      hotelId: "",
      price: 0,
      image:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
      noOfBed: 0,
      roomNo: 0,
      roomType: "",
      sceneryFacing: false,
      rental: false,
      ticketing: false,
      balcony: false,
      swimmingPool: false,
      gym: false,
      phone: "",
    },
    validate: {
      hotelId: (v) => (v ? null : "Select a hotel"),
      roomNo: (value) => {
        if (!value || value <= 0) return "At least one room is required";
      },
      noOfBed: (value) => {
        if (!value || value <= 0) return "At least one bed is required";
      },
      price: (value) => {
        if (!value || value <= 0) return "Price is required";
      },
      roomType: (v) => (v ? null : "Select a room type"),
      phone: (v) => (v ? null : "Provide phone number"),
    },
  });

  type hotelIdData = {
    id: string;
    name: string;
  };
  type hotelOption = {
    label: string;
    value: string;
  };

  const [hotels, setHotels] = useState<hotelOption[]>([]);
  const getHotels = async () => {
    try {
      const hotelList = await axiosInstance.get("/hotels");
      console.log(hotelList.data);
      const optionData = hotelList?.data?.map((item: hotelIdData) => {
        return { label: item.name, value: item.id };
      });
      setHotels(optionData);
      console.log(hotels);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!hotels.length) getHotels();
  }, [hotels]);

  const handleSubmit = async (data: RoomFormData) => {
    try {
      const response = await axiosInstance.post("/rooms", data);
      if (response) {
        form.reset();
        toast(response.data?.message ?? "Room Added Sucessfully");
      }
    } catch (error) {
      console.log(error);
      toast("Something went wrong");
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
          label="Phone"
          placeholder="Enter the phone number"
          required
          {...form.getInputProps("phone")}
        />

        <TextInput
          label="Number of Rooms"
          placeholder="Enter the number of room"
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
            { value: "Economic", label: "Economic" },
            { value: "Deluxe", label: "Deluxe" },
            { value: "Standard", label: "Standard" },
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
            {...form.getInputProps("balcony")}
          />

          <Switch
            label="Scenery Facing"
            {...form.getInputProps("sceneryFacing")}
          />

          <Switch label="Ticketing" {...form.getInputProps("ticketing")} />

          <Switch
            label="Swimming Pool"
            {...form.getInputProps("swimmingPool")}
          />

          <Switch label="Rental" {...form.getInputProps("rental")} />

          <Switch label="Gym" {...form.getInputProps("gym")} />
        </div>

        <Button className="mt-4 bg-cyan-700" type="submit">
          Submit
        </Button>
      </form>
    </FormWrapper>
  );
}

export default RoomForm;
