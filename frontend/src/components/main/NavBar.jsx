import React from "react";
import NavBarCSS from "../../styles/NavBar.module.css";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const NavBar = () => {
  return (
    <nav className={NavBarCSS.navContainer}>
      <img className={NavBarCSS.cdzLogo} src="images/cdzLogo.png" />
      <Button variant="ghost">
        <HamburgerMenuIcon className={NavBarCSS.menuIcon} />
      </Button>
    </nav>
  );
};

export default NavBar;
