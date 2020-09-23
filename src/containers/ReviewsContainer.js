import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {addReview, deleteReview} from '../components/actions'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  restaurantReviews(){
    
    return this.props.reviews.filter(review => review.restaurnatId === this.props.restaurant.id )
  }

  render() {
    
    return (
      <div>
        <ReviewInput addReview = {this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews = {this.restaurantReviews()} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return state
}
export default connect (mapStateToProps, {addReview, deleteReview})(ReviewsContainer);
