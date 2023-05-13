import { Badge, Button, Text } from "@mantine/core";
import React from "react";
import { getUserAPI } from "../../api/apis";
import UserDashboard from "../../Components/UsersHomeDashboard/HomeDashboard";
import SellerDashboardPage from "../SellerDashboard";
import UserDashboardPage from "../UserDashboard";
import MainWrapper from "./../../wrapper/Main";

interface userType {
  firstName: string;
  lastName: string;
  role: "user" | "seller";
}

const ProfilePage = () => {
  const [user, setUser] = React.useState<userType>();
  const [Loading, setLoading] = React.useState<boolean>();

  React.useState(() => {
    if (!user || Loading)
      getUserAPI()
        .then((d) => {
          setUser(d.data);
          console.log(d.data);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
  }, []);

  const logOutHandler = async () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  if (Loading) return <MainWrapper>Loading</MainWrapper>;
  return (
    <MainWrapper>
      <div className="p-8 grid gap-4 w-full text-center">
        <div className="flex gap-4 items-center">
          <Text className="text-2xl font-semibold">
            {user?.firstName} {user?.lastName}
          </Text>
          <Badge>{user?.role}</Badge>
        </div>
        <div className="flex justify-start">
          <Button
            className="bg-cyan-700"
            onClick={() => logOutHandler()}
          >
            Log Out
          </Button>
        </div>
      </div>
      <div>
        {user?.role === "user" ? (
          <UserDashboardPage />
        ) : (
          <SellerDashboardPage />
        )}
      </div>
    </MainWrapper>
  );
};

export default ProfilePage;
