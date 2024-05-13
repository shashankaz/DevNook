import React, { useState } from "react";
import bag from "../assets/bag.svg";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="flex md:px-[100px] px-[30px] py-6 justify-between items-center fixed w-full h-[80px] bg-white">
      <NavLink to={"/"}>
        <div className="flex items-center gap-1">
          <div className="md:h-8 md:w-8 h-7 w-7">
            <img src={bag} alt="" />
          </div>
          <h1 className="md:text-3xl text-2xl">DevNook</h1>
        </div>
      </NavLink>
      <div className="flex items-center justify-center">
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="md:flex hidden text-lg" id="navbar">
            <li className="px-3" onClick={handleShowNavbar}>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="px-3" onClick={handleShowNavbar}>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="px-3" onClick={handleShowNavbar}>
              <NavLink to={"/extensions"}>Extensions</NavLink>
            </li>
            <li className="px-3" onClick={handleShowNavbar}>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li className="px-3" onClick={handleShowNavbar}>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden text-2xl block" onClick={handleShowNavbar}>
        <RxHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
