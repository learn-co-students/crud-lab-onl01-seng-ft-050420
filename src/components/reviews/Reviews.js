import React from "react";
import Review from "./Review";

const Reviews = ({ reviews, deleteReview }) => {
  return (
    <ul>
      {reviews.map((x) => (
        <Review key={x.id} review={x} deleteReview={deleteReview} />
      ))}
    </ul>
  );
};

export default Reviews;
