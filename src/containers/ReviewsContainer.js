import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={this.props.restaurant.id}
        />
        <Reviews
          reviews={this.props.reviews.filter(
            (x) => x.restaurantId === this.props.restaurant.id
          )}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (payload) =>
      dispatch({ type: "CREATE_REVIEW", payload: payload }),
    deleteReview: (id) => dispatch({ type: "DELETE_REVIEW", payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
