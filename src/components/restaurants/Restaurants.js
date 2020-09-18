import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  handleDelete = (id) => {
    this.props.deleteRestaurant(id)
  }

  render() {
    console.log(this.props)
    return(
      <ul>
        {this.props.restaurants.map(restaurant => 
          <Restaurant handleDelete={() => this.handleDelete(restaurant.id)} key={restaurant.id} restaurant={restaurant}/>
        )}
      </ul>
    );
  }
};


export default Restaurants