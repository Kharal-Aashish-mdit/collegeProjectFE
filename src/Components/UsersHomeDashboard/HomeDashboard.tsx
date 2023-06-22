import { Select, Title, Text } from "@mantine/core";
import axios from "axios";
import React from "react";
import { axiosInstance } from "../../utils/axios.instance";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [userSearch, setUserSearch] = React.useState<string>();
  const locationData = useGetLocations();
  const roomsData = useGetRooms(userSearch);
  return (
    <div className="p-4">
      <div className="grid gap-4 my-4">
        <Title order={2} className="text-center text-cyan-700 ">
          Search Hotel Rooms
        </Title>
        <Select
          className="max-w-md w-full mx-auto"
          clearable
          onChange={(e) => setUserSearch(e ?? "")}
          placeholder="Search Location"
          searchable
          nothingFound="No options"
          data={locationData?.LocationList?.map((item) => item.name) ?? []}
        />
      </div>
      {roomsData?.isLoading && <Text>Loading</Text>}
      {roomsData?.isError && (
        <Text className="text-red-400">Error Occured</Text>
      )}
      {roomsData?.HotelList && (
        <div className="grid gap-4 mt-8 sm:grid-cols-2 md:grid-cols-4 ">
          {roomsData?.HotelList?.map((item) => (
            <HotelCardSimple key={item?.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;

export const HotelCardSimple = (props: RoomData) => {
  return (
    <a href={`/roomDetail/${props?.id}`}>
      <div className="grid border-2 border-solid border-gray-100 rounded-xl overflow-hidden hover:border-cyan-700 hover:shadow cursor-pointer text-gray-900 hover:text-cyan-700 duration-300 hover:shadow">
        <img
          style={{ objectFit: "cover", height: "200px", width: "100%" }}
          src={props?.images}
          alt={props?.hotel?.name}
        />
        <div className="grid gap-2 p-4">
          <div>
            <Title order={3} lineClamp={2} fw={600}>
              {props?.hotel?.name}
            </Title>
            <div className="flex justify-between gap-4 items-center">
              <div className="grid gap-2">
                <Text>Location: {props?.hotel?.address}</Text>
                <Title order={5} fw={600} className="leading-0">
                  Type: {props?.roomtype}
                </Title>
              </div>
              <Title
                order={4}
                className="font-semibold bg-cyan-600 px-2 text-white rounded"
              >
                Rs:{props?.price}/-
              </Title>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export const HotelCard = (props: RoomData) => {
  return (
    <Link to={`/roomDetail/${props?.id}`}>
      <div className="grid border border-solid border-gray-300 rounded-xl overflow-hidden hover:border-cyan-700 hover:shadow cursor-pointer text-gray-900 hover:text-cyan-800 duration-300 hover:rounded-none">
        <img
          style={{ objectFit: "cover", height: "200px", width: "100%" }}
          src={props?.images}
          alt={props?.hotel?.name}
        />
        <div className="grid gap-2 p-2">
          <div className="flex gap-2 justify-between">
            <div>
              <Title order={3} lineClamp={2}>
                {props?.hotel?.name}
              </Title>
              <Text>Location: {props?.hotel?.address}</Text>
            </div>
            <div className="grid text-right">
              <Title order={4} color="green" className="font-semibold">
                Rs:{props?.price}/-
              </Title>
            </div>
          </div>
          <div>
            <Title order={5} fw={600} className="leading-0">
              Features:
            </Title>
            <div className="text-sm flex gap-4 flex-wrap">
              {props?.gym && <li className="ml-4"> Gym</li>}
              {props?.swimmingPool && <li className="ml-4"> SwimmingPool</li>}
              {props?.balcony && <li className="ml-4"> Balcony</li>}
              {props?.sceneryFacing && <li className="ml-4"> SceneryFacing</li>}
              {props?.ticketing && <li className="ml-4"> Ticketing</li>}
              {props?.rental && <li className="ml-4">Rental</li>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export type RoomData = {
  id: string;
  price: number;
  images: string;
  phone: number;
  roomNo: number;
  sceneryFacing: boolean;
  rental: boolean;
  ticketing: boolean;
  balcony: boolean;
  swimmingPool: boolean;
  gym: boolean;
  roomtype: string;
  hotel: {
    id: string;
    name: string;
    address: string;
  };
};
export type LocationData = {
  id: string;
  name: string;
};

export const useGetRooms = (location = "") => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [HotelList, setHotelList] = React.useState<RoomData[]>();

  React.useEffect(() => {
    axiosInstance
      .get(location ? `/rooms/location/${location}` : "/rooms/")
      .then((d) => {
        console.log(d.data);
        setIsLoading(false);
        setHotelList(d?.data);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
      });
  }, [location]);

  return { isLoading, isError, HotelList };
};

export const useGetLocations = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [LocationList, setLocationList] = React.useState<LocationData[]>();

  React.useEffect(() => {
    axiosInstance
      .get(`/locations`)
      .then((d) => {
        setIsLoading(false);
        setLocationList(d?.data);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
      });
  }, []);

  return { isLoading, isError, LocationList };
};
