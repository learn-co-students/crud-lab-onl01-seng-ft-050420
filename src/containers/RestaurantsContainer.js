import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'
import { addRestaurant, removeRestaurant } from '../actions/restaurantActions.js'

class RestaurantsContainer extends Component {

  render() {
    // debugger;
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} removeRestaurant={this.props.removeRestaurant}/>
      </div>
    )
  }
}

// function mapStateToProps(state){
//   return state
// }

export default connect(state => state, { addRestaurant, removeRestaurant })(RestaurantsContainer);
