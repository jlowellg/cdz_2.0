import React from "react";
import NavBarCSS from "../../styles/NavBar.module.css";
import { Button } from "../ui/button";
import NavMenu from "../sub/NavMenu";
import HomeIcon from "@mui/icons-material/Home";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavBar = () => {
  return (
    <div className={NavBarCSS.navContainer}>
      <img className={NavBarCSS.cdzLogo} src="images/cdzLogo.png" />
      <nav className={NavBarCSS.navLargeMenu}>
        <button className={NavBarCSS.navLargeMenuItem}>
          <HomeIcon />
          HOME
        </button>
        <button className={NavBarCSS.navLargeMenuItem}>
          <PriceChangeIcon />
          PRICES
        </button>
        <button className={NavBarCSS.navLargeMenuItem}>
          <AccountCircleIcon />
        </button>
      </nav>
      <NavMenu />
    </div>
  );
};

export default NavBar;
