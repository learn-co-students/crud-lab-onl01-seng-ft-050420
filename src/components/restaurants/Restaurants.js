import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(el => <Restaurant restaurant={el} deleteRestaurant={this.props.deleteRestaurant} />)}
      </ul>
    );
  }
};

export default Restaurants;