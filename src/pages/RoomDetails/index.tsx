import React from "react";
import { useParams } from "react-router-dom";
import FormWrapper from "../../wrapper/Form";
import {
  HotelCardSimple,
  RoomData,
} from "../../Components/UsersHomeDashboard/HomeDashboard";
import { axiosInstance } from "./../../utils/axios.instance";
import MainWrapper from "../../wrapper/Main";
import { Title, Text, Button } from "@mantine/core";
import BookingForm from "../../Components/Forms/BookingForm";

const RoomDetailPage = () => {
  const id = useParams().id as string;
  const roomData = useGetRoom(id);
  const suggestionData = useGetRecommendation(id);

  return (
    <MainWrapper>
      <div className="sm:flex grid gap-4 p-4">
        <div className="w-full ">
          {roomData?.RoomData && <HotelDetail {...roomData?.RoomData!} />}
        </div>
        <div className="max-w-[300px] w-full gap-4 flex flex-col ">
          <Title className="text-lg text-cyan-700">Recommendations:</Title>
          {suggestionData?.SuggestionsList?.map((item) => (
            <HotelCardSimple key={item?.id} {...item} />
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

export default RoomDetailPage;

export const useGetRoom = (id: string) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [RoomData, setRoomData] = React.useState<RoomData>();

  React.useEffect(() => {
    axiosInstance
      .get(`/rooms/${id}`)
      .then((d) => {
        setIsLoading(false);
        setRoomData(d?.data);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
      });
  }, []);
  console.log(RoomData);

  return { isLoading, isError, RoomData };
};

export const useGetRecommendation = (id: string) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [SuggestionsList, setSuggestionsList] = React.useState<RoomData[]>([]);

  React.useEffect(() => {
    if (id)
      axiosInstance
        .get(`/rooms/findSuggestions/${id}`)
        .then((d) => {
          setIsLoading(false);
          setSuggestionsList(d?.data);
        })
        .catch((e) => {
          console.log(e);
          setIsError(true);
        });
  }, [id]);

  return { isLoading, isError, SuggestionsList };
};

export const HotelDetail = (props: RoomData) => {
  const [showBooking, setShowBooking] = React.useState<boolean>(false);
  return (
    <div className="gap-4 grid">
      <img
        className="rounded-xl"
        style={{ objectFit: "cover", height: "60vh", width: "100%" }}
        src={props?.images}
        alt={props?.hotel?.name}
      />
      <div className="grid gap-2 p-2">
        <div className="flex gap-4 justify-between">
          <div className="grid gap-2">
            <Title>{props?.hotel?.name}</Title>
            <Text>Location: {props?.hotel?.address}</Text>
          </div>
          <div className="grid gap-2">
            <Title order={2} className="font-semibold text-cyan-700">
              Rs: {props?.price}
            </Title>
            <Button
              className="bg-cyan-700"
              onClick={() => setShowBooking(!showBooking)}
            >
              Book a room
            </Button>
          </div>
        </div>
        {showBooking && <BookingForm />}
        <div>
          <Title order={2} fw={600} className="leading-0">
            Features:
          </Title>
          <div className="grid gap-4 py-4 grid-cols-2 max-w-lg mr-auto">
            {props?.gym && <li className="ml-4"> Gym</li>}
            {props?.swimmingPool && <li className="ml-4"> SwimmingPool</li>}
            {props?.balcony && <li className="ml-4"> Balcony</li>}
            {props?.sceneryFacing && <li className="ml-4"> SceneryFacing</li>}
            {props?.ticketing && <li className="ml-4"> Ticketing</li>}
            {props?.rental && <li className="ml-4"> Rental</li>}
          </div>
        </div>
      </div>
    </div>
  );
};
