import React from 'react';
import Review from './Review';

const Reviews = props => {
  
    return (
      <ul>
        {props.reviews.map(review => <Review key={review.id} review={review} delete={props.delete} /> )}
      </ul>
    );
  
};

export default Reviews;