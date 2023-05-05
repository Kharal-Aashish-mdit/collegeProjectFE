import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Textarea, Button, Checkbox } from "@mantine/core";
import axios from "axios";

function SearchHotel() {
  const form = useForm({
    initialValues: {
      location: "",
      balcony: false,
      sceneryFacing: false,
      ticketing: false,
      swimmingPool: false,
      rental: false,
    },
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/seller/", form.values);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" pl-9 pt-5 h-1/2 w-1/2">
      {/* <form onSubmit={handleSubmit}>
        <label className="text-xl" htmlFor="SearchForm">
          User Search Form
        </label>
        <TextInput
          label="Location"
          placeholder="Enter your preferred location"
          required
          {...form.getInputProps("location")}
        />
        <div className="grid gap-3">
          <div>
            <label className="text-x">Filters:</label>
          </div>
          <Checkbox
          label = "Balcony"
          {...form.getInputProps("balcony")}
          />
          <Checkbox
          label = "Scenery Facing"
          {...form.getInputProps("sceneryFacing")}
          />
          <Checkbox
          label = "Ticketing"
          {...form.getInputProps("ticketing")}
          />
          <Checkbox
          label = "Swimming Pool"
          {...form.getInputProps("swimmingPool")}
          />
          <Checkbox
          label = "Rental"
          {...form.getInputProps("rental")}
          />
          <div>
          <Button className="bg-blue-700 m-4 w-1/2" type="submit">
            Submit
          </Button>
        </div>
        </div>
      </form> */}
    </div>
  );
}

export default SearchHotel;
