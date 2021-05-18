import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../../Logo/Logo";
import NavigationItem from "../../Navigation/NavigationItem/NavigationItem";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <Logo />
      <nav className={classes.DisplayOnly}>
        <NavigationItem active={true} />
      </nav>
    </header>
  );
};

export default toolbar;
