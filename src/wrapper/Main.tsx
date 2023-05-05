import React from 'react'
import MainNavBar from './../Components/Admin/AdminWrapper';

export type ChildProp = {children:React.ReactNode}

const MainWrapper = ({children}:ChildProp) => {
  return (<div>
    <MainNavBar/>
    <main>{children}</main>
  </div>
  )
}

export default MainWrapper