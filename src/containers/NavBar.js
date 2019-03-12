import React from "react";
import { connect } from "react-redux";

import { userActions, userSelectors } from "../ducks/user";
import { NavBar } from "../components";

class NavBarContainer extends React.Component {
  state = {
    name: "Kolya"
  };

  componentDidMount = () => {
    console.log("fetchUserById");
    this.props.fetchUserById(1);
  };

  render() {
    return this.props.user.name ? (
      <NavBar name={this.props.user.name} />
    ) : (
      <NavBar name={this.state.name} />
    );
  }
}

export default connect(
  state => ({
    user: userSelectors.currentUser(state)
  }),
  {
    fetchUserById: userActions.fetchUserById
  }
)(NavBarContainer);
