import React from 'react';
import Restaurant from './Restaurant';

const Restaurants = ({ restaurants, deleteRestaurant }) =>
  restaurants &&
  restaurants.map((restaurant) => (
    <Restaurant
      key={restaurant.id}
      restaurant={restaurant}
      deleteRestaurant={deleteRestaurant}
    />
  ));

export default Restaurants;
