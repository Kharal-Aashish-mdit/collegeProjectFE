import React from "react"
import { Link, NavLink } from "react-router-dom"
import { Title, Text } from "@mantine/core"
import { UserOutlined } from "@ant-design/icons"

const navItemsData: NavItemType[] = [
  {
    key: "bookings_page",
    title: "Bookings",
    link: "/bookings",
  },
  {
    key: "login",
    title: "Login",
    link: "/login",
  },
  {
    key: "register_page",
    title: "Register",
    link: "/register",
  },
  {
    key: "about_page",
    title: "About",
    link: "/about",
  },
]

type NavItemType = { key?: string; title: string; link: string }

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
  )
}

const NavBar = () => {
  return (
    <div className="bg-cyan-700  py-2 px-8">
      <nav className="flex justify-between items-center bg-cyan-700 text-gray-800 py-2 px-8">
        <Link to="/">
          <Title order={3} className="text-white hover:text-yellow-400">
            Yatru
          </Title>
        </Link>

        <div className="flex gap-6">
          {localStorage?.getItem("token") && (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${
                  isActive ? "text-white" : "text-gray-300"
                }  md:hover:text-amber-300 list-none no-underline flex gap-2`
              }
            >
              <UserOutlined />
              <Text className="font-semibold">Profile</Text>
            </NavLink>
          )}
          {navItemsData?.map((item) => (
            <NavItem {...item} />
          ))}
        </div>
      </nav>
      {/* <div className="text-white text-justify pl-8 pt-6">
        <Title>Find your next destination</Title>
      </div> */}
    </div>
  )
}

export default NavBar
