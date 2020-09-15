import React from 'react';

const Review = ({ review, updateReview, deleteReview }) => (
  <div>
    <li>
      {review.text}
      <button onClick={updateReview}></button>
      <button onClick={() => deleteReview(review.id)}> X </button>
    </li>
  </div>
);

export default Review;
