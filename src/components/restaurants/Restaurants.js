import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {

  renderRestaurants =() => {
    console.log(this.props.restaurants)
    return this.props.restaurants.map( restaurant => {
      return <Restaurant restaurant={restaurant} key={restaurant.id} removeRestaurant={this.props.removeRestaurant}/>
    })
  }
  render() {
    // debugger;
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;