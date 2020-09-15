import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

const Restaurant = ({ restaurant, deleteRestaurant }) => (
  <div>
    <li>
      {restaurant.text}
      <button onClick={() => deleteRestaurant(restaurant.id)}> X </button>
      <ReviewsContainer restaurant={restaurant} />
    </li>
  </div>
);

export default Restaurant;
