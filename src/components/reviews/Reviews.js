import React from 'react';
import Review from './Review';

const Reviews = ({ reviews, restaurantId, updateReview, deleteReview }) => {
  const reviewFilter = reviews.filter(
    (review) => review.restaurantId === restaurantId
  );
  const reviewList = reviewFilter.map((review) => (
    <Review
      key={review.id}
      review={review}
      updateReview={updateReview}
      deleteReview={deleteReview}
    />
  ));

  return (
    <div>
      <ul>{reviewList}</ul>
    </div>
  );
};

export default Reviews;
