import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Title, Text } from "@mantine/core";

const navItemsData: NavItemType[] = [
  {
    key: "bookings_page",
    title: "Bookings",
    link: "/bookings",
  },
  {
    key: "about_page",
    title: "About",
    link: "/about",
  },
  {
    key: "register_page",
    title: "Register",
    link: "/register",
  },
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
        <Title
          order={3}
          className="text-white hover:text-yellow-400"
        >
          Yatru
        </Title>
      </Link>

      <div className="flex gap-6">
        {localStorage?.getItem("token") && (
          <NavItem
            title="Profile"
            link="/profile"
          />
        )}
        {navItemsData?.map((item) => (
          <NavItem {...item} />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
