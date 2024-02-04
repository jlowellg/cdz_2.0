import React from "react";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import NavBarCSS from "../../styles/NavBar.module.css";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const NavMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={NavBarCSS.menuButton}>
          <HamburgerMenuIcon className={NavBarCSS.menuIcon} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={NavBarCSS.menuContainer}>
        <DropdownMenuGroup>
          <DropdownMenuItem className={NavBarCSS.menuItem}>
            Home
          </DropdownMenuItem>
          <DropdownMenuItem className={NavBarCSS.menuItem}>
            Prices
          </DropdownMenuItem>
          <DropdownMenuItem className={NavBarCSS.menuItem}>
            Login
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavMenu;
