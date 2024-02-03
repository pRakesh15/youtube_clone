import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./subcomponent/SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={1}
      className="static  bg-[#000] top-0 justify-between"
    >
    <Link to="/" className="flex items-center "><img src={logo} alt="logo" className="h-8"/></Link>
    <SearchBar/>
    </Stack>
  );
};

export default Navbar;
