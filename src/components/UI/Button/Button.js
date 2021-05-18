import React from "react";
import classes from "./Button.css";
const button = (props) => {
  let btn = props.btnType;
  return (
    <button
      className={[classes.Button, classes[btn]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
