import React from "react";
import Review from "./Review";

const Reviews = ({ reviews, deleteReview }) => {
  const renderReview = () => {
    return reviews.map((x) => (
      <Review key={x.id} review={x} deleteReview={deleteReview} />
    ));
  };

  return <ul>{renderReview()}</ul>;
};

export default Reviews;
