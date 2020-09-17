import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurant = () => {
      return this.props.restaurants.map( rest => <Restaurant key={rest.id} restaurant={rest} deleteRestaurant={this.props.deleteRestaurant}/> )
  }
  
  render() {
    return(
      <ul>
        {this.renderRestaurant()}
      </ul>
    );
  }
};

export default Restaurants;