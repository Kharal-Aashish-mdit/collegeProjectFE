import React from 'react'
import { Flex, Text } from '@mantine/core'
import { NavLink } from 'react-router-dom'
//@ts-ignore
import { Icon } from '@iconify/react'

const navItemsData: NavItemType[] = [
  {
    key: 'home_page',
    title: 'Home',
    link: '/',
  },
  {
    key: 'Hotel_Form',
    title: 'AddHotel',
    link: '/sellerHotel',
  },
  {
    key: 'Seller_Form',
    title: 'SellerForm',
    link: '/seller',
  },
  
  {
    key: 'Hotel_RoomForm',
    title: 'RoomForm',
    link: '/addHotelRoom',
  },

  {
    key: 'User_Dashboard',
    title: 'UserDashboard',
    link: '/userDashboard',
  },
  
  
]

const AdminNavBar = () => {
  return (
    <nav className="main-Nav bg-blue-500 list-none ">
      <Flex className=" " justify="space-between">
        <Text className="justify-center items-center px-12">
          <h1 >
            Yatru Admin Panel
          </h1>
          {/* <img className='h-24 bg-white rounded-full ' src="\src\assets\logo.webp" alt="" /> */}
        </Text>
        <ul className=" flex space-x-7 justify-center items-center">
          {navItemsData?.map((item) => (
            <NavItem {...item} />
          ))}
        </ul>

        <div className="flex space-x-7 px-8 justify-center items-center ">
          <button className=" bg-black text-amber-300 border-yellow-400	rounded-2xl p-2  md:hover:text-white">
            Login
          </button>
          <button className="bg-black text-amber-300 border-yellow-400	rounded-2xl p-2  md:hover:text-white">
            Register
          </button>
        </div>
      </Flex>
    </nav>
  )
}

type NavItemType = { key?: string; title: string; link: string }

const NavItem = ({ title, link }: NavItemType) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `${
          isActive ? 'text-amber-300':'text-white' 
        } text-2xl  md:hover:text-white list-none no-underline`
      }
    >
      <li className="">{title}</li>
    </NavLink>
  )
}
export default AdminNavBar
