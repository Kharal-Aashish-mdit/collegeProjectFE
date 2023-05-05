import React from "react";
import NavBar from "../Components/NavBar/NavBar";

export type ChildProp = { children: React.ReactNode };

const MainWrapper = ({ children }: ChildProp) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default MainWrapper;
