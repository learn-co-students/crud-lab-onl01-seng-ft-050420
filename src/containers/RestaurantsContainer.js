import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {connect} from 'react-redux'
import { addRestaurant, deleteRestaurant} from '../components/actions'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant = {this.props.deleteRestaurant} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return state
}




export default connect(mapStateToProps, { addRestaurant, deleteRestaurant}) (RestaurantsContainer);
