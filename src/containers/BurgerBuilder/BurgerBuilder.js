import React, { Component } from "react";
import Aux from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.6,
};
let track = 0;
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  updatePurchaseAbleHandler = () => {
    this.setState({ purchaseable: track !== 0 });
  };
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updateIngredient = { ...this.state.ingredients };
    updateIngredient[type] = newCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENT_PRICE[type];
    track += 1;
    this.setState({ ingredients: updateIngredient, totalPrice: newPrice });
    this.updatePurchaseAbleHandler();
  };
  purchaseCanclerHandler = () => {
    this.setState({ purchasing: false });
  };
  continueHandler = () => {
    alert("Your are Continuing");
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const updateIngredient = { ...this.state.ingredients };
    updateIngredient[type] = newCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGREDIENT_PRICE[type];
    track -= 1;
    this.setState({ ingredients: updateIngredient, totalPrice: newPrice });
    this.updatePurchaseAbleHandler();
  };
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let ele in disabledInfo) {
      disabledInfo[ele] = disabledInfo[ele] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCanclerHandler}
        >
          <OrderSummary
            price={this.state.totalPrice}
            success={this.continueHandler}
            danger={this.purchaseCanclerHandler}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredient={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
