import React from "react";
import MainWrapper from "../../wrapper/Main";
import { Badge, Text, Title } from "@mantine/core";
import { getBookingsUser } from "../../api/apis";
import { Link } from "react-router-dom";

interface PropType {
  id: string;
  price: number;
  images: string;
  noOfBed: number;
  roomNo: number;
  roomtype: string;
  sceneryFacing: boolean;
  rental: boolean;
  ticketing: boolean;
  balcony: boolean;
  swimmingPool: boolean;
  gym: boolean;
  createdDate: string;
  status: string;
  roomStatus: string;
  guestId: string;
  updaterId: string;
  hotel: Hotel;
}

interface Hotel {
  id: string;
  name: string;
  address: string;
  createdDate: string;
  status: string;
}

const BookingsPage = () => {
  const [data, setData] = React.useState<PropType[]>();
  const [Loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!data) {
      getBookingsUser()
        .then((d) => {
          console.log(d.data);
          setData(d?.data);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    }
  }, []);

  return (
    <MainWrapper>
      <div className="grid gap-8 p-4 mx-auto max-w-2xl">
        <Title className="text-center text-cyan-700">Bookings List</Title>
        <div className="grid gap-4">
          {data?.map((item) => (
            <Link
              to={`/roomDetail/${item.id}`}
              key={item.id}
              className="p-4 rounded border border-solid border-gray-300 hover:border-cyan-500 text-gray-700 hover:text-black bg-cyan-50 "
            >
              <article className="flex justify-between gap-4 items-center">
                <Title
                  order={4}
                  fw={700}
                >
                  {item.hotel.name}
                  <span className="text-cyan-700 mx-2 font-normal">
                    [ {item.roomtype} Room ]
                  </span>
                </Title>
                <Badge
                  variant="dot"
                  size="lg"
                >
                  Booked
                </Badge>
              </article>
              <div className="flex flex-wrap gap-4">
                <Text>Rs: {item.price}</Text>
                <Text>No of Bed: {item.noOfBed}</Text>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

export default BookingsPage;
