import React from "react";
import SellerForm from "../../Components/Forms/SellerForm";
import MainWrapper from "../../wrapper/Main";
import { Button } from "@mantine/core";
import LocationForm from "../../Components/Forms/LocationForm";
import HotelForm from "../../Components/Forms/HotelForm";
import RoomForm from "../../Components/Forms/RoomForm";

enum ActiveFormEnum {
  locationForm = "locationForm",
  hotelForm = "hotelForm",
  roomsForm = "roomsForm",
  none = "none",
}

const SellerDashboardPage = () => {
  const [active, setActive] = React.useState<ActiveFormEnum>(
    ActiveFormEnum.none
  );
  const ActiveFormRenderer = () => {
    switch (active) {
      case "locationForm":
        return <LocationForm />;
      case "hotelForm":
        return <HotelForm />;
      case "roomsForm":
        return <RoomForm />;
      default:
        return null;
    }
  };
  const onClickHandler = (e: ActiveFormEnum) => setActive(e);
  return (
    <div className="grid gap-4 ">
      <div className="flex gap-4 p-8">
        <Button
          className="bg-cyan-700"
          onClick={() => onClickHandler(ActiveFormEnum.locationForm)}
        >
          Add Location
        </Button>
        <Button
          className="bg-cyan-700"
          onClick={() => onClickHandler(ActiveFormEnum.hotelForm)}
        >
          Add Hotel
        </Button>
        <Button
          className="bg-cyan-700"
          onClick={() => onClickHandler(ActiveFormEnum.roomsForm)}
        >
          Add Rooms
        </Button>
      </div>
      {ActiveFormRenderer()}
    </div>
  );
};

export default SellerDashboardPage;
