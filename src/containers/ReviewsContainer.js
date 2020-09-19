import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'
import { addReview, removeReview } from '../actions/restaurantActions.js'

class ReviewsContainer extends Component {

  filteredReviews(){
    return this.props.reviews.filter( review => review.restaurantId === this.props.restaurant.id )
  }

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews={this.filteredReviews()} removeReview={this.props.removeReview} />
      </div>
    )
  }
}

export default connect(state => state, { addReview, removeReview })(ReviewsContainer);
