import React from "react";
import { useParams } from "react-router-dom";
import FormWrapper from "../../wrapper/Form";
import {
  HotelCardSimple,
  RoomData,
} from "../../Components/UsersHomeDashboard/HomeDashboard";
import { axiosInstance } from "./../../utils/axios.instance";
import MainWrapper from "../../wrapper/Main";
import { Title, Text } from "@mantine/core";

const RoomDetailPage = () => {
  const id = useParams().id as string;
  const roomData = useGetRoom(id);
  const suggestionData = useGetRecommendation(id);

  return (
    <MainWrapper>
      <div className="flex gap-4 p-4">
        <div className="w-full ">
          {roomData?.RoomData && <HotelDetail {...roomData?.RoomData!} />}
        </div>
        <div className="max-w-[300px] w-full grid gap-4 ">
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
  return (
    <div className="gap-4 grid">
      <img
        className="rounded-xl"
        style={{ objectFit: "cover", height: "60vh", width: "100%" }}
        src={props?.images}
        alt={props?.hotel?.name}
      />
      <div className="grid gap-2 p-2">
        <div className="flex gap-2 justify-between">
          <div>
            <Title>{props?.hotel?.name}</Title>
            <Text>{props?.hotel?.address}</Text>
          </div>
          <div className="flex gap-2 text-right items-end">
            <Text className="text-lg font-semibold">Price:</Text>
            <Title color="green" className="font-light">
              Rs:{props?.price} /-
            </Title>
          </div>
        </div>
        <div>
          <Title order={2} fw={600} className="leading-0">
            Features:
          </Title>
          <div className="grid gap-4 py-4">
            {props?.gym && <li className="ml-4"> Gym</li>}
            {props?.swimmingPool && <li className="ml-4"> SwimmingPool</li>}
            {props?.balcony && <li className="ml-4"> Balcony</li>}
            {props?.sceneryFacing && <li className="ml-4"> SceneryFacing</li>}
            {props?.ticketing && <li className="ml-4"> Ticketing</li>}
          </div>
        </div>
      </div>
    </div>
  );
};
