import React, { useContext, useState } from "react";

import "./Navbar.css";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "./Context/StoreContext";
const Navbar = ({ setShowLogin }) => {
const [menu, setMenu] = useState("home");

const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar justify-between items-center flex pt-5 pr-0 pl-0">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo w-22 h-12" />
      </Link>
      <ul className="navbar-menu flex gap-12 text-purple-800 font-medium list-none">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>

      <div className="navbar-right flex items-center gap-14"> {/* search bar*/}
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />   {/* basket */}
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)} class="normal">
          <a
            href="#_"
            class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
          >
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span class="relative text-white">Sign In</span>
            </span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
