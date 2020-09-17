import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  renderRestaurant = () => {
    return this.props.restaurants.map((x) => (
      <Restaurant
        key={x.id}
        deleteRestaurant={this.props.deleteRestaurant}
        restaurant={x}
      />
    ));
  };

  render() {
    return <ul>{this.renderRestaurant()}</ul>;
  }
}

export default Restaurants;
