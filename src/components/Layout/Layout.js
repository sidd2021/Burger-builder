import React, { Component } from "react";
import Aux from "../../hoc/Auxi";
import classes from "./Layout.css";
import Toolbar from "../Burger/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Burger/Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: true });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          close={this.sideDrawerToggleHandler}
        />
        <main className={classes.Container}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
