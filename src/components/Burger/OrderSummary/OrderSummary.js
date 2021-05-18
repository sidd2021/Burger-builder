import React from "react";
import Aux from "../../../hoc/Auxi";
import Button from "../../UI/Button/Button";
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>
          {igKey}:{props.ingredients[igKey]}
        </span>
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <h3>Total Price : ${props.price.toFixed(2)}</h3>
      <p>Continue to Checkout?</p>
      <Button btnType="Success" clicked={props.success}>
        Continue
      </Button>
      <Button btnType="Danger" clicked={props.danger}>
        Cancle
      </Button>
    </Aux>
  );
};
export default orderSummary;
