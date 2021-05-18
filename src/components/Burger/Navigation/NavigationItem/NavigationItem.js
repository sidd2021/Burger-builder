import React from "react";

import classes from "./NavigationItem.css";
const navigationitem = (props) => {
  return (
    <div className={classes.NavigationItem}>
      <a href="/" className={props.active ? classes.active : null}>
        Burger Builder
      </a>
      <a href="/">Checkout</a>
    </div>
  );
};

export default navigationitem;
