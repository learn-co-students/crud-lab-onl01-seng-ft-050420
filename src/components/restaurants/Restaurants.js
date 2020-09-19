import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  
  render() {

    console.log(this.props.restaurants)
    const restaurants = this.props.restaurants.map(restaurant =>{
            return (<Restaurant deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant}/>
    )})
    
    return(
      <ul>
        {/* {this.props.restaurants.map(restaurant => 
          <Restaurant deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant}/>
        )} */}
        {restaurants}
      </ul>
    );
  }
};


export default Restaurants