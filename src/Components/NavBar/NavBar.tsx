import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Title, Text } from "@mantine/core";

const navItemsData: NavItemType[] = [
  {
    key: "home_page",
    title: "Home",
    link: "/",
  },
  {
    key: "about_page",
    title: "About",
    link: "/about",
  },
  // {
  //   key: "Hotel_Form",
  //   title: "AddHotel",
  //   link: "/sellerHotel",
  // },

  // {
  //   key: "Hotel_RoomForm",
  //   title: "RoomForm",
  //   link: "/addHotelRoom",
  // },
  // {
  //   key: "SELLER_DASHBOARD",
  //   title: "Seller",
  //   link: "/sellerDashboard",
  // },

  // {
  //   key: "User_Dashboard",
  //   title: "UserDashboard",
  //   link: "/userDashboard",
  // },
];

type NavItemType = { key?: string; title: string; link: string };

const NavItem = ({ title, link }: NavItemType) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `${
          isActive ? "text-white" : "text-gray-300"
        }  md:hover:text-amber-300 list-none no-underline`
      }
    >
      <Text className="font-semibold">{title}</Text>
    </NavLink>
  );
};

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-cyan-700 text-gray-800 py-2 px-8">
      <Link to="/">
        <Title order={3} className="text-white hover:text-yellow-400">
          Yatru
        </Title>
      </Link>
      <div className="flex gap-4">
        {navItemsData?.map((item) => (
          <NavItem {...item} />
        ))}
      </div>
      {localStorage?.getItem("token") ? (
        <NavItem title="Profile" link="/sellerDashboard" />
      ) : (
        <NavItem title="Login" link="/login" />
      )}
    </nav>
  );
};

export default NavBar;
