import React from "react";
import { Link } from "react-router-dom";
import NavBarCSS from "../../styles/NavBar.module.css";
import NavMenu from "../sub/NavMenu";
import HomeIcon from "@mui/icons-material/Home";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavBar = () => {
  return (
    <div className={NavBarCSS.navContainer}>
      <img className={NavBarCSS.cdzLogo} src="images/cdzLogo.png" />
      <nav className={NavBarCSS.navLargeMenu}>
        <Link reloadDocument to="/">
          <button className={NavBarCSS.navLargeMenuItem}>
            <HomeIcon />
            HOME
          </button>
        </Link>
        <Link reloadDocument to="/prices">
          <button className={NavBarCSS.navLargeMenuItem}>
            <PriceChangeIcon />
            PRICES
          </button>
        </Link>
        <button className={NavBarCSS.navLargeMenuItem}>
          <AccountCircleIcon />
        </button>
      </nav>
      <NavMenu />
    </div>
  );
};

export default NavBar;
