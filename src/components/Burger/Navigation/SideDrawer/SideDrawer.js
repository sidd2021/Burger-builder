import React from "react";
import Logo from "../../../Logo/Logo";
import classes from "./SideDrawer.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import Aux from "../../../../hoc/Auxi";
const sidedrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.close} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.SideLogo}>
          <Logo />
        </div>
        <nav>
          <NavigationItem active />
        </nav>
      </div>
    </Aux>
  );
};
export default sidedrawer;
