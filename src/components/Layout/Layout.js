import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ component }) => {
  return (
    <>
      <Navbar />
      {component}
    </>
  );
};

export default Layout;
