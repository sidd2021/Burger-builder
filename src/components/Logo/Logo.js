import React from "react";
import BurgerLogo from "../../assets/images/burger.png";
import classes from "./Logo.css";
const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={BurgerLogo} alt="Burger Logo" />
    </div>
  );
};

export default logo;
