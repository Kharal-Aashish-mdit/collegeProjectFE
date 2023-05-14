import React from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "@mantine/form";
import { TextInput, Button, Input } from "@mantine/core";
// import { DateInput } from "@mantine/dates";

import TextLabel from "../Label";
import { postBooking, postBookingType } from "../../api/apis";
import FormWrapper from "../../wrapper/Form";

const BookingForm = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const bookingForm = useForm<postBookingType>({
    initialValues: {
      roomid: id!,
      name: "",
      email: "",
      checkIn: new Date(),
      checkOut: new Date(),
    },
    validate: {
      email: (value) => {
        if (!value) return "Email cannot be left empty";
        if (!value.includes("@") || !value.includes("."))
          return "Input valid Email";
      },
      roomid: (v) => (v ? null : "Required"),
      name: (v) => (v ? null : "Required"),
      checkIn: (v) => (v ? null : "Required"),
      checkOut: (v) => (v ? null : "Required"),
    },
  });

  const submitHandler = async (data: postBookingType) => {
    try {
      const response = await postBooking(data);
      console.log(response);
      if (response) {
        toast(response?.data?.message ?? "Booking Sucessfull");
        navigation("/");
      }
    } catch (err) {
      toast("Booking Failed");
    }
  };
  return (
    <FormWrapper name="Book a Room">
      <form
        onSubmit={bookingForm.onSubmit(submitHandler)}
        className="grid gap-4 w-full max-w-sm mx-auto"
      >
        <TextInput
          label={<TextLabel value="Name" />}
          {...bookingForm.getInputProps("name")}
        />
        <TextInput
          label={<TextLabel value="Email" />}
          {...bookingForm.getInputProps("email")}
        />
        <div>
          <TextLabel value="Check In" />

          <Input type="date" {...bookingForm.getInputProps("checkIn")} />
        </div>
        <div>
          <TextLabel value="Check Out" />
          <Input type="date" {...bookingForm.getInputProps("checkOut")} />
        </div>

        <Button type="submit" className="mt-2 bg-cyan-700">
          Book a Room
        </Button>
      </form>
    </FormWrapper>
  );
};

export default BookingForm;
